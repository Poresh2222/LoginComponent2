import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPageComponent } from './components/front-page/front-page.component';
import { StaticPageComponent } from './components/static-page/static-page.component';
import { LoginDialogRouteComponent } from './components/auth/login/login-dialog/login-dialog.component';
//import { SignupDialogRouteComponent } from './components/auth/signup/signup-dialog/signup-dialog.component';
//import { LostPasswordComponent } from './components/auth/lost-password/lost-password.component';
//import { lostPasswordTrx, gamesCategoryTrx, editProfileTrx, launcgGameTrx } from './router-translation.labels';

const loginRoute = {
  path: 'login',
  component: LoginDialogRouteComponent
}

//const signupRoute = {
//  path: 'signup',
//  component: SignupDialogRouteComponent
//}

const routes: Routes = [
  // { path: 'requestdeposit', component: DepositComponent,canActivate: [AuthGuard]  },
  { path: '', component: FrontPageComponent,children: [
    loginRoute,
    //signupRoute
  ]},
  { path: ':slug/:name', component: StaticPageComponent , children: [
    loginRoute,
    //signupRoute
  ]  },
  
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }