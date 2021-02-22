import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';

import { SMALL_DIALOG_CONFIG } from '../dialog/dialog.config';

import { BaseComponent } from '../base/base.component';
import { ErrorDialogComponent } from '../dialog/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../dialog/success-dialog/success-dialog.component';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent extends BaseComponent {

  protected _data:any;

  @Input()
  set data(dataInput: any) {
    this._data = dataInput;
  }

  get data(): any { return this._data; }

  constructor() { 
    super() 
  }

  ngOnInit(): void {
    
  }
  
}

export type ConfirmationResponse = {
  isConfirmed: boolean;
  data: any;
}

@Component({
  template: '',
})
export class BasePageComponentWithDialogs extends BasePageComponent {

  constructor(
    public errorDialog:MatDialog
    ) { 
      super() 
    }

  ngOnInit(): void {

  }

  openErrorDialog(msg?:string): void {
    const dialogRef = this.errorDialog.open(ErrorDialogComponent, {
      ...SMALL_DIALOG_CONFIG,
      panelClass: "transparent",
      data: {msg:msg}
    });
  }

  openSuccessDialog(msg?:string): void {
    const dialogRef = this.errorDialog.open(SuccessDialogComponent, {
      ...SMALL_DIALOG_CONFIG,
      panelClass: "transparent",
      data: {msg:msg}
    });
  }

}
