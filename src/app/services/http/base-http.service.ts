import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

export const LOGIN_EMAIL_URL:string="/user/login/?product_type=casino";
export const LOGOUT_URL:string="/user/logout/";
export const CHECK_SESSION:string="/user/check-session/"
export const USER_INFO_SESSION:string="/user/info/?slider_info=1"
export const CURRENT_BALANCE:string="/api/user/get-balance/?product_type=casino"
export const LOST_PASSWORD:string="/user/restore_password/"
export const LAUNCH_GAME:string="/games/start/"
export const EDIT_PROFILE:string="/user/edit_profile/"



@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  apiUrl:string;

  constructor( 
    protected http:HttpClient
    ) { 
   
  }

  setApiUrl (apiUrl:string){
    this.apiUrl = apiUrl;
  }

  protected postRequest<T>(url:string,formGroup:FormGroup){
    return this.http.post<T>(this.apiUrl+url, formGroup.value);
  }

  protected getRequest<T>(url:string,formGroup:FormGroup){
    return this.http.get<T>(this.apiUrl+url, {params:formGroup.value});
  }

  protected getRequestParam<T>(url:string,paramName:string,paramValue:string){
    const options = { params: new HttpParams().set(paramName, paramValue) };
    return this.http.get<T>(this.apiUrl+url, options);
  }

  protected getRequestHttpParams(url:string,reqParams:HttpParams){
    const args = { params: reqParams };
    return this.http.get(this.apiUrl+url,{...args,...{responseType: "text"}});
  }

  protected get<T>(url:string){
    return this.http.get<T>(this.apiUrl+url);
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    if (error.status === 406){
      return throwError(
        error);
    }
    else{
      return throwError(
        "Some unexpected error occured.");
    }
    
  };
}