
import { Component } from '@angular/core';

@Component({
  selector: 'evt',
  
  template: 
  `
  <button (click)="OnMyClick($event)">Click Button</button>
  `
})

export class Evt2Component{
  OnMyClick($event)
  { console.log("Button Clicked",$event);  }
  }
