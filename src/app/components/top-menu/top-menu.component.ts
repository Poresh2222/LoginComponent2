import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { InitialDataService } from 'src/app/services/page/initial-data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent extends BasePageComponent {

  constructor(
    public initialData:InitialDataService
    ) { 
      super() 
  }

  childData:any;

  ngOnInit(): void {
    //this.childData = this.initialData.fetchData().pipe(takeUntil(this.unsubscribe)).subscribe(resp=>{
    //  this.childData = resp;
    //})
  }

  @Output() closeEvent = new EventEmitter();

  callLinkClickedParent(): void {
    this.closeEvent.next();
  }

}