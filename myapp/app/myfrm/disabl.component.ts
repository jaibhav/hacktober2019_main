import { Component} from '@angular/core';

@Component({
  selector: 'disabl',
  templateUrl: './disabl.component.html',
  styleUrls: ['./myfrm.component.css']
})
export class DisablComponent{
	log(val)
	{
		console.log(val);
	}
	
	accept()
	{
		alert("Data Submitted");
	}
}
