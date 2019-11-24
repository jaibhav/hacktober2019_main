


import { Component } from '@angular/core';

@Component({
  selector: 'propp',
  
  template: `
  <table [border]="5">
  <tr>
  <td> A	</td>
  <td> B	</td>
  <td> C	</td>
  </tr>
  <tr>
  <td> X	</td>
  <td>Y	</td>
  <td>Z	</td>
  </tr>
  </table>
  
  `
})

export class PropComponent{
  title = 'Angular Programming';
  code='CAP917';
  desc="Full stack front end";
}
