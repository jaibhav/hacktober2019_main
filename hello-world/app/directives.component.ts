import { Component } from '@angular/core';

@Component ({
  selector: 'direc',
  template: `
            <h5> Ng Class </h5>
              <ul>
            <li *ngFor="let person of details"
              [ngClass]="{'text-success': true}">
              {{ person.age }} {{ person.country }}
            </li>
            </ul>

            <h5> Ng Style </h5>
            <ul>
          <li *ngFor="let person of details"
            [ngStyle]="{'background-color' : person.age > 30 ? 'green' : 'red'}">
            {{ person.age }} {{ person.country }}
          </li>
          </ul>
  `
})

export class DirectivesComponent {
  details: any[] = [
    {
    "name": "Mr. Singh",
    "age": 35,
    "country" : 'India'
    },
    {
    "name": "Mr. Sen",
    "age": 32,
    "country" : 'India'
    },
    {
    "name": "Dr. Das",
    "age": 21,
    "country" : 'UK'
    },
    {
    "name": "Mr. Sengupta",
    "age": 34,
    "country" : 'USA'
    },
    {
    "name": "Mr. Mehta",
    "age": 32,
    "country" : 'UK'
    }
];


}
