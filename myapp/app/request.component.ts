import { Component } from '@angular/core';
import { History } from './year2018_2019.component';
import { Fights } from './year2018_2019.component';
import { Special_Fight } from './year2018_2019.component';
import { Dramas } from './year2018_2019.component';
import { OnlySon } from './year2018_2019.component';

@Component({
  selector: 'request',
  
  template: `<h1>
  {{title}}  </h1>
  
  <h2 [textContent]="line_1"></h2>
  
  <h3 [textContent]="line_2"></h3>
  
  <h4 [textContent]="line_3"></h4>
  
  `
})
export class ReqComponent{
  title = 'Request to come and show me your face';
  line_1='Bhai tu meri Jaan hai. But thodi sharam kar. Its my day I think. Tere bDay ki day dreaming main months ago start karta hun. And meri wari tujhe code likh k request karni pad rahi hai that:: ';
  line_2='AT LEAST APNI KHARBUJE JAISI SHAKAL TOH DIKHA K JAH';
  line_3='Samajh toh yeh nahi aa raha main yeh kar kyun raha hun??';
}