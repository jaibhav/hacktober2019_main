
import { Component } from '@angular/core';

@Component({
  selector: 'tmplt',
  template:
  `
  <input #abc (keyup.enter)="onKeyUp(abc.value)" />
  `
})

export class TmpltComponent{
  onKeyUp(abc)
  { console.log(abc);  }
  }
