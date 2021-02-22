import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasePageComponent } from '../../../base-page/base-page.component';

@Component({
  selector: 'app-wrong-password',
  templateUrl: './wrong-password.component.html',
  styleUrls: ['./wrong-password.component.scss']
})
export class WrongPasswordComponent extends BasePageComponent {

  constructor() { 
    super() 
  }

  @Output() closeEvent = new EventEmitter();


  ngOnInit(): void {
  }

  lostPassword(){
    this.closeEvent.next('/lost-password');
  }

  contactSupport(){
    this.closeEvent.next('/contact-support');
  }

}
