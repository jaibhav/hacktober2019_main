
import { Component } from '@angular/core';

@Component({
  selector: 'evt',
  
  template: 
  `
  <button (click)="OnMyClick()">Click Button</button>
  `
})

export class Evt1Component{
  OnMyClick()
  { console.log("Button Clicked");  }
  }
