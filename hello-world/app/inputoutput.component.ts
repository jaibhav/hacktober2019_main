import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inPutoutPut',
  template: `<p (click)="onClick.emit('Second String')">This is the InputOutput component.
             I received a string '{{InputString}}' from the app component.
             Click me ...!!! </p>
             `
})
export class InputOutputComponent  {
  //Input and Output is to exchange data between components
  //Input is used to receive data in whereas Output is used to send data out.
  //Output sends data out by exposing event producers, usually EventEmitter objects.
  @Input() InputString: string;
  @Output() onClick = new EventEmitter()
}
