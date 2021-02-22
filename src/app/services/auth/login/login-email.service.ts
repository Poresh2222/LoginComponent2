import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { LoginEmailResponse } from './login.models';
import { LOGIN_EMAIL_URL } from '../../http/base-http.service';
import { BaseUsermgrService } from '../../http/base-usermgr.service';
import { UserInfo, LoggedStatus } from './login.models';
import { LoginStatusService } from './login-status.service';

@Injectable({
  providedIn: 'root'
})
export class LoginEmailService extends BaseUsermgrService {

  constructor(
    http: HttpClient,
    cookie: CookieService, 
    private loginStatusService: LoginStatusService,
    @Inject(LOCALE_ID)
    public locale: string) {
    super(http, cookie,locale);
  }

  requestLoginUser(loginForm: FormGroup): Observable<UserInfo> {
    return super.postRequest<LoginEmailResponse>(LOGIN_EMAIL_URL, loginForm)
      .pipe(
        switchMap((resp) => {
          this.loginStatusService.updateUserInfo({
            isLogged: resp.status == "success" ? LoggedStatus.logged : LoggedStatus.notLogged,
            username: resp.user ? resp.user : null,
          });
          return this.loginStatusService.getLoginStatus();
        })
      );
  }
}