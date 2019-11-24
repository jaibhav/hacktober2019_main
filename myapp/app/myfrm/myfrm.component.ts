import { Component} from '@angular/core';

@Component({
  selector: 'myfrm',
  templateUrl: './myfrm.component.html',
  styleUrls: ['./myfrm.component.css']
})
export class MyfrmComponent{
	log(val)
	{
		console.log(val);
	}
}
