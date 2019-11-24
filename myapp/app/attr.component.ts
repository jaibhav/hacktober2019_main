
import { Component } from '@angular/core';

@Component({
  selector: 'atttr',
  
  template: `
  <table border=5>
  <tr>
  <th>Sr.No.</th>
  <th [attr.colspan]="spn">Name</th>
  <th>Section</th>
  </tr><tr>
  <td>1</td>
  <td>I am</td>
  <td>Me</td>
  <td>DE045</td></tr></table>
  `
})

export class AttrComponent{
  spn=2;
}
