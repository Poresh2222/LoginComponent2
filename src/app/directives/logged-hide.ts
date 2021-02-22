import { ViewContainerRef, TemplateRef, Inject, PLATFORM_ID, OnInit, Directive } from '@angular/core';

import { LoginStatusService } from '../services/auth/login/login-status.service';

@Directive({
    selector: '[loggedHide]'
})
export class LoggedHideDirective implements OnInit {

    _isCreated:boolean = false;
    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private userInfoLoginService: LoginStatusService,
    ) {

    }

    ngOnInit() {
        this.userInfoLoginService.getLoginStatus().subscribe((resp) => {
            if (resp.isLogged!==-1) {
                this.viewContainer.clear();
            }
            else{
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        })
    }
}