import { Component } from '@angular/core';

@Component ({
  selector: 'boot',
  template: `
             <h4> BootStrap Buttons </h4>
             <button class="btn btn-primary"> Submit </button>
             <br/> <br/>
             <table class= "table table-bordered">
                 <tr>  <th> Name </th> <th> Contact Number </th> </tr>
                 <tr> <td> Rahul </td> <td> 84746377827 </td> </tr>
                 <tr> <td> Mr. Rahul </td> <td> 8474637 </td> </tr>
             </table>


            `
})

export class BootComponent {

}
