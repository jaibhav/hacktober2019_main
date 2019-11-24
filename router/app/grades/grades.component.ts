import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-new-cmp',
   templateUrl: './grades.component.html',
   styleUrls: ['./grades.component.css']
})

export class GradesComponent implements OnInit{
   grades = [
   {'course':'CAP916','grade':'A'},
   {'course':'CAP917','grade':'A+'},
   {'course':'CAP918','grade':'A'}
   ];
   constructor() {}
   ngOnInit() { }
}