import {Component} from '@angular/core';
import {MyClass} from './inj.service';

@Component({
	selector:'injct',
	template:`<h1>
	
	{{attr}}
	
	</h1>`
})

export class InjClass
{
	attr;
	
	constructor(obj:MyClass)
	{
		this.attr=obj.getService();
	}
}
