import { Component } from '@angular/core';

@Component({
  selector: 'prop_img',
  template: `<h2>{{title}}</h2>
  <font [color]="green">
  <h2 [textContent]="code"></h2>
  <h2 [textContent]="desc"></h2>
  </font>
  `
})

export class PropImgComponent{
  title = 'Angular Programming';
  code='CAP917';
  desc="Full stack front end";
  
}
