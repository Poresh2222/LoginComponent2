import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,  switchMap } from 'rxjs/operators';

import { BaseHttpService, USER_INFO_SESSION } from '../../http/base-http.service';
import { LoginStatusService } from '../login/login-status.service';
import { UserInfo, LoggedStatus } from '../login/login.models';
import { LoginUserInfo } from './check-session.models';
import { BaseUsermgrService } from '../../http/base-usermgr.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService extends BaseUsermgrService {

  constructor(http:HttpClient,cookie:CookieService,private loginStatusService:LoginStatusService,@Inject(LOCALE_ID) public locale: string) {
    super(http,cookie,locale);
   }

  requestCheckUserInfo ():Observable<UserInfo> {
    return this.get<LoginUserInfo>(USER_INFO_SESSION).pipe(
      switchMap((resp) => {
        this.loginStatusService.updateUserInfo({
          isLogged: resp.status === "logged" ? LoggedStatus.logged : LoggedStatus.notLogged,
        });
        return this.loginStatusService.getLoginStatus();
      }),
      catchError((error: HttpErrorResponse) =>{
        if (error.status===403){
          this.loginStatusService.updateUserInfo({
            isLogged:  LoggedStatus.notLogged,
          });
        }
        // return an observable with a user-facing error message
        return this.loginStatusService.getLoginStatus();
      })
    );
  }
}