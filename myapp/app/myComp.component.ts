

import {Component} from '@angular/core';
@Component(
{
	selector:'me',
	template:`<h1> 
	{{section}} 
	<ol>
	<li *ngFor='let crs of courses'> 
	{{crs}}
	</li>
	</ol>
	</h1>`
}
) 
export class MyComp
{
	section="Section is DE045";
	courses=['CAP916','CAP917','CAP918'];	
}