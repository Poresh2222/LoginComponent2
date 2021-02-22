import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { LoginEmailService } from '../../../services/auth/login/login-email.service';
import { UserInfo } from '../../../services/auth/login/login.models';
import { WrongPasswordDialogComponent } from './wrong-password/wrong-password-dialog/wrong-password-dialog.component';
import { BasePageComponent } from '../../base-page/base-page.component';
import { SMALL_DIALOG_CONFIG } from '../../dialog/dialog.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BasePageComponent {

  formSubmited: boolean = false;
  loginResponse: UserInfo;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  @Output() closeEvent = new EventEmitter();

  closeDialog(url: string): void {
    this.closeEvent.next(url);
  }

  constructor(
    public dialog: MatDialog,
    private loginService: LoginEmailService,
    private formBuilder: FormBuilder) {
      super()
  }

  ngOnInit() {
  }

  onCreateAccountRequested() {
  }

  openLostPasswordDialog(msg?:string): void {
    const dialogRef = this.dialog.open(WrongPasswordDialogComponent, {
      ...SMALL_DIALOG_CONFIG,
      panelClass: "transparent",
      data: {msg:msg}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.redirectUrl)
        this.closeDialog(dialogRef.componentInstance.redirectUrl);
    });
  }


  onSubmit(loginForm) {
    if (this.formSubmited) return;
    this.formSubmited = true;
    this.loginService.requestLoginUser(loginForm).pipe(takeUntil(this.unsubscribe)).subscribe((resp: UserInfo) => {
      this.loginResponse = resp;
      this.closeDialog('../');
    }, err => {
      this.formSubmited = false;
      if (err.status === 406) {
        if (err.remind_label && err.remind_label==="Reset password"){
          this.openLostPasswordDialog();
        }
        else {
          this.openLostPasswordDialog(err.error_message);
        }
      }
    });
  }

  signup() {
    this.closeDialog('../signup');
  }

  lostPassword() {
    this.closeDialog('/lost-password');
  }

}