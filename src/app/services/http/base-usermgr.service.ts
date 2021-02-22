import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { BaseHttpService } from './base-http.service';
import { CookieService } from 'ngx-cookie-service';
import { LOCALE_ID, Inject } from '@angular/core';
import { CustomEncoder } from '../../interceptors/encode-http.interceptor';

@Injectable({
    providedIn: 'root'
})
export class BaseUsermgrService extends BaseHttpService {

  constructor(
    http: HttpClient, 
    protected cookie: CookieService,
    @Inject(LOCALE_ID) 
    public locale: string ) {  
      super(http) 
      super.setApiUrl(environment.apiUrl);
  }

  createHeaders(headers: {
    [name: string]: string | string[];
    } = {}): HttpHeaders {
      const newHeaders = {};
      Object.assign(newHeaders, headers);
      const csrfToken = this.cookie.get('csrftoken');
      newHeaders['Content-language'] = this.locale;
      newHeaders['Accept-Language'] = `pl-PL,${this.locale}`;
      newHeaders['x-translation-lang'] = this.locale.slice(0,2);
      newHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
      if (csrfToken) {
          newHeaders['X-CSRFToken'] = csrfToken;
      }
      return new HttpHeaders(newHeaders);
  }

  protected postRequest<T>(url: string, formGroup: FormGroup) {
    const httpOptionsDefault = {
      headers: this.createHeaders(),
      withCredentials: true
    };
    const params = new HttpParams({
      encoder: new CustomEncoder(),
      fromObject: formGroup.value
    });

      // const formData = new FormData();
      // Object.keys(formGroup.value).forEach(key => {
      //     formData.append(key,formGroup.value[key]);
      // });

    return this.http.post<T>(environment.apiUrl + url, params, { ...httpOptionsDefault });

  }

  get<T>(url: string) {
    const httpOptionsDefault = {
      headers: this.createHeaders(),
      withCredentials: true
    };
    
    return this.http.get<T>(environment.apiUrl + url, { ...httpOptionsDefault })

  }

}