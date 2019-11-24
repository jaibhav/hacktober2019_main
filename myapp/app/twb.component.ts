import { Component } from '@angular/core';

@Component({
selector:'twb',
template:`
<input [(ngModel)]="val" (keyup.enter)="function1()">
`
})
export class TWBComponent {
	val="D1618";
	function1()
	{
		console.log("Why did you click the button?"+ this.val);
	}
}
