import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import {CookieService } from 'ngx-cookie-service';

import { LostPasswordResponse } from './lost-password.models';
import { LOGIN_EMAIL_URL, LOST_PASSWORD } from '../../http/base-http.service';
import { BaseUsermgrService } from '../../http/base-usermgr.service';

@Injectable({
  providedIn: 'root'
})
export class LostPasswordService extends BaseUsermgrService {

  constructor(
    http:HttpClient,
    cookie:CookieService,
    @Inject(LOCALE_ID) 
    public locale: string
    ) {
      super(
        http,
        cookie,
        locale
    );
  }

  requestLostPasswordinUser (lostPasswordForm: FormGroup): Observable<LostPasswordResponse> {
    return super.postRequest<LostPasswordResponse>(LOST_PASSWORD,lostPasswordForm)
    .pipe(
      catchError(this.handleError)
    );
  }
}