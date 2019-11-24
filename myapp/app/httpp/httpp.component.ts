import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/common/http';
@Component({
  selector: 'app-httpp',
  templateUrl: './httpp.component.html',
  styleUrls: ['./httpp.component.css']
})
export class HttppComponent implements OnInit {

  constructor(http:Http) { }

  ngOnInit() {
  }

}
