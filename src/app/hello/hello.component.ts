import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <p [ngStyle]="{ 'color': color }">Hello, {{name}}!</p>
    <button (click) = handleClick()>Get current color</button>
  `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  @Input() name: string;
  @Output() getCurrentColor: EventEmitter<string> = new EventEmitter<string>();

  color = 'black';

  handleClick(){
    this.getCurrentColor.emit(this.color);
  }

  private getRandomColor() {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  randomizeColor() {
    this.color = this.getRandomColor();
  }



}
