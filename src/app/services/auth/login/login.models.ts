export interface LoginEmailResponse {
    status: string;
    last_site: string;
    user: string;
    language: string;
  }

  export interface LogoutResponse {
    status: string;
  }

export enum LoggedStatus {
  voidState = 0,
  notLogged = -1,
  logged = 1
}

export interface UserInfo{
  isLogged: LoggedStatus;
  username?: string;
  language?: string;
}