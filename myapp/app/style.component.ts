
import { Component } from '@angular/core';

@Component({
  selector: 'stl',
  
  template: `
  <button [style.backgroundColor]="clr?'blue':'red'">
  ONE
  </button>
  `
})

export class StlComponent{
  clr=false;
  //two="ABC";
}
