import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  fs = 'First String'
  result = ''

  upCase(st:string): void {
    this.result = "This is the app component. I received a string '" + st
    + "' from the InputOutput component" + " and I capitalize it here " + st.toUpperCase()

}

}
