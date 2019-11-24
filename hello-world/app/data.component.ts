import { Component } from '@angular/core';

@Component ({
  selector: 'data',
  template: `
  <h4> Property Binding </h4>
  <img src = " {{ imglink }}" /> <br/> <br/>
  <h4> Attribute Binding </h4>
  <table border=1>
    <tr>  <td [attr.colspan]="ColSpan"> Hello </td> </tr>
  </table> <br/> <br/>
  <h4> Class Binding </h4>
  <button class="btn btn-secondary" [class.active]="presentStatus"> 2nd Button </button>
  <br/> <br/>
  <h4> Style Binding </h4>
  <button [style.backgroundColor]="Status ? 'green' : 'red'"> Hello </button>
  <br/> <br/>
  <h4> Event Binding </h4>
  <button (click)="BtnClick($event)"> Click Me </button>
  <br/> <br/>
  <h4> Event Filtering </h4>
  <input (keyup.enter)="KeyUp()" />
  <br/> <br/>
  <h4> Template Variable </h4>
  <input #fname (keyup.enter)="Up(fname.value)" />
  <br/> <br/>
  <h4> Two-way Binding </h4>
  <input [(ngModel)]="mob" (keyup.enter)="KEYup()"/>
            `
})

export class DataComponent {
      imglink = "assets/img/angular.png";

    ColSpan = 2;

    presentStatus = true;

    Status = true;

    BtnClick($event) {
       console.log("Just now clicked",$event);
    }

    KeyUp(){
       console.log("You Just Pressed Enter Key");
    }

    Up(fname) {
      console.log(fname);
    }

    mob = "123456789";
    KEYup() {
     console.log(this.mob);
    }
}
