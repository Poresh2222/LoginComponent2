import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BaseUsermgrService } from '../../http/base-usermgr.service';
import { LoginStatusService } from '../login/login-status.service';
import { UserInfo, LoggedStatus } from '../login/login.models';
import {LogoutResponse} from '../login/login.models';
import { LOGOUT_URL } from '../../http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService extends BaseUsermgrService {

  constructor(
    http:HttpClient,
    cookie:CookieService,
    private loginStatusService:LoginStatusService,
    @Inject(LOCALE_ID) 
    public locale: string
    ) {
      super(
        http,
        cookie,
        locale
    );
  }


  public requestLogoutUser (): Observable<UserInfo> {
    return this.get<LogoutResponse>(LOGOUT_URL).pipe(
      switchMap((resp:LogoutResponse) => {
        this.loginStatusService.updateUserInfo({
          isLogged: resp.status.toUpperCase() === "OK" ? LoggedStatus.notLogged : LoggedStatus.logged,
        });
        return this.loginStatusService.getLoginStatus();
      }));
  }

  // requestLogoutUser(): Observable<UserInfo> {
  //   return super.get<LogoutResponse>(LOGOUT_URL).pipe(
  //       switchMap((resp) => {
  //         this.loginStatusService.updateUserInfo({
  //           isLogged: resp.status == "logged" ? LoggedStatus.logged : LoggedStatus.notLogged,
  //         });
  //         return this.loginStatusService.getLoginStatus();
  //       })
  //     );
  // }
}