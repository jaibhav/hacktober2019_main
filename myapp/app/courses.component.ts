import {Component} from '@angular/core';

@Component({
	selector:'subject',
	template:`<h2>{{variab}}</h2>
	<ul>
	<li *ngFor="let cr of courses">
	{{cr}}
	</li>
</ul>
`	
})

export class CoursesComponent{
	variab="Hello";
	courses=["CAP916","CAP917"];
}
