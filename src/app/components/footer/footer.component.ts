import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { BasePageComponent } from '../base-page/base-page.component';
import { InitialDataService } from 'src/app/services/page/initial-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BasePageComponent {

  constructor(
    public initialData:InitialDataService
    ) { 
      super() 
  }

  childData: any;

  ngOnInit(): void {
    //this.childData = this.initialData.fetchData().pipe(takeUntil(this.unsubscribe)).subscribe(resp=>{
    //  this.childData = resp;
    //})
  }

}