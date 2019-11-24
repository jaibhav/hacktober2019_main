
import { Component } from '@angular/core';

@Component({
  selector: 'evt',
  
  template: 
  `<div (click)="OnDivClk()">
  <button (click)="OnMyClick($event)">Click Button</button>
  </div>
  `
})

export class Evt3Component{
  OnDivClk()
  { console.log("Div Clicked");  }

  OnMyClick($event)
  { 
	$event.stopPropagation();
	console.log("Button Clicked",$event);  
  }
  }
