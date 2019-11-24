import { Component } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app';
   searchparam = 2;
   jsondata;
   name;
   constructor(private http: Http) { }
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam).
      map((response) ⇒ response.json()).subscribe((data) ⇒ this.converttoarray(data))
   }
   converttoarray(data) {
      console.log(data);
      this.name = data[0].name;
   }
}