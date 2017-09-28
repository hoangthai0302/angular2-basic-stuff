import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'warning',
  template: `
    <h1 (click)="warning()">{{type}}</h1>
  `
})
export class WarningComponent {

  @Input() type: string = "success";
  
  warning() {
    console.log(this.type);
  }

}
