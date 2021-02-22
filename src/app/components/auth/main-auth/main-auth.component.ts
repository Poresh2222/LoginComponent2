import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { BasePageComponent } from '../../base-page/base-page.component';
import { UserInfoService } from '../../../services/auth/chek-session/user-info.service';
import { UserInfo } from '../../../services/auth/login/login.models';

@Component({
  selector: 'app-main-auth',
  templateUrl: './main-auth.component.html',
  styleUrls: ['./main-auth.component.scss']
})
export class MainAuthComponent extends BasePageComponent {

  userInfo : UserInfo;

  constructor(
    private userInfoLoginService: UserInfoService,
   ) { super() }

  ngOnInit(): void {
      this.userInfoLoginService.requestCheckUserInfo().pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
        this.userInfo = resp;
      })
  }

}