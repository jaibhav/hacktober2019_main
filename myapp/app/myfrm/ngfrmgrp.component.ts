

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'grp-valid',
  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm)">
	<p *ngIf="addr.invalid">Address is invalid.</p>
        <div ngModelGroup="Addrs" #addr="ngModelGroup">
        <input name="City" [ngModel]="Addrs.City" minlength="2">
        <input name="State" [ngModel]="Addrs.State" required>
      </div>
      <input name="email" ngModel> 
      <button>Submit</button>
    </form>    
    <button (click)="setV()">Set value</button>
  `})
export class NgModelGroupComp {
  Addrs = {City: 'ABC', state: 'XYZ'};
  onSubmit(frm: NgForm) {
    console.log(frm.value);  
    console.log(frm.valid);  
  } setV() { this.Addrs = {City: 'MNO', state: 'PQR'}; }
}