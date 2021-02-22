import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainAuthComponent } from './components/auth/main-auth/main-auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginDesktopComponent } from './components/auth/login/login-desktop/login-desktop.component';
import { LoginDialogComponent } from './components/auth/login/login-dialog/login-dialog.component';
import { LoginButtonComponent } from './components/auth/login/login-button/login-button.component';
import { WrongPasswordComponent } from './components/auth/login/wrong-password/wrong-password.component';
import { WrongPasswordDialogComponent } from './components/auth/login/wrong-password/wrong-password-dialog/wrong-password-dialog.component';
import { BaseComponent } from './components/base/base.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CloseDialogButtonComponent } from './components/dialog/close-dialog-button/close-dialog-button.component';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './components/dialog/error-dialog/error-dialog.component';
import { GameDialogComponent } from './components/dialog/game-dialog/game-dialog.component';
import { SuccessDialogComponent } from './components/dialog/success-dialog/success-dialog.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { TopMenuItemComponent } from './components/top-menu/top-menu-item/top-menu-item.component';
import { TopMenuButtonComponent } from './components/top-menu/top-menu-button/top-menu-button.component';
import { TopMenuBalanceComponent } from './components/top-menu/top-menu-balance/top-menu-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAuthComponent,
    LoginComponent,
    LoginDesktopComponent,
    LoginDialogComponent,
    LoginButtonComponent,
    WrongPasswordComponent,
    WrongPasswordDialogComponent,
    BaseComponent,
    BasePageComponent,
    CloseDialogButtonComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    GameDialogComponent,
    SuccessDialogComponent,
    TopMenuComponent,
    TopMenuItemComponent,
    TopMenuButtonComponent,
    TopMenuBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
