import { Component } from '@angular/core';

@Component({
selector:'ifff',
template:`<div *ngIf="arr.length>0" >
Array has {{arr.length}} values.
</div>

<div *ngIf="arr.length==0" >
Array is Empty
</div>
`
})
export class DrctvComponent {
	arr=[1,2,3,4];
	//sizz=arr.length;
	
	
}
