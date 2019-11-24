import { Component} from '@angular/core';

@Component({
  selector: 'drp',
  templateUrl: './drpdwn.component.html',
  styleUrls: ['./myfrm.component.css']
})
export class DrpfrmComponent{
	city=[
	{id:1, name:"LDH"},
	{id:2, name:"ASR"},
	{id:3, name:"JLD"}
	];
	log(val)
	{
		console.log(val);
	}
}
