import { Component } from '@angular/core';

@Component ({
  selector: 'pipes',
  template: `
             <h4> Built-in Pipes </h4>
             {{ details.title | uppercase }} <br/>
             {{ details.rating | number:'1.2-2' }} <br/>
             {{ details.students | number }} <br/>
             {{ details.fees | currency }} <br/>
             {{ details.subjectDate | date:'shortDate' }} <br/>
             {{ details.subjectDate | date:'fullDate' }} <br/>
             {{ details.subjectDate | date:'mediumDate' }} <br/>
             <h4> Custom Pipes </h4>
             {{ text | short }}
            `
})

export class PipesComponent {
      details = {
         title: "Angular JS",
         rating: 5.467467,
         students: 35157,
         fees: 30000,
         subjectDate: new Date(2019, 9, 10)
      }

      text = "Hi Everyone..!!! You are learning Angular... Hope u r enjoying";
}
