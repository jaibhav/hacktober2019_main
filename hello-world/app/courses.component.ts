import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component ({
  selector: 'courses',
  template: `
             <ul start=5>
               <li *ngFor= "let course of courses">
               {{ course }}
               </li>
             </ul>
  `
})

export class CoursesComponent {
  //courses = ["HTML", "CSS","JS","PHP","AJS"];
    courses;

    constructor(service: CoursesService) {  //dependency injection
      this.courses = service.getCourses();
    }


}
