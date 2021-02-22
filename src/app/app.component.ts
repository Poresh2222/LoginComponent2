import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

import { BaseComponent } from './components/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'LoginComponent2';
  @ViewChild('sidenav') sidenav: MatSidenav;

  TOP_MENU_IDENTIFIER: string = 'top_menu';
  loginDialogLink:string;

  constructor( ) { 
    super() 
  }

  ngOnInit(): void {

  }

  close() {
    this.sidenav.close();
  }

}
