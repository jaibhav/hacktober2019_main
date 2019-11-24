

import { Component } from '@angular/core';
@Component({
  selector: 'cls',
  template: `
  <button [class.active]="one">ONE</button>
  
  <button [class.tow]="two">TWO</button>
  
  `
})

export class ClsComponent{
  one=false;
  two="ABC";
}
