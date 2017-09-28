import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <div *ngIf="!hidden">
      <div class="backdrop" (click)="hide()"></div>
      <div class="modal">
        <ng-content></ng-content>
        <div>
          <button (click)="hide()">OK</button>
        </div>
      </div>
    </div>
  `,
  styleUrls:['./alert.component.css']
})
export class AlertComponent {
  hidden = true;
  
  show() {
    this.hidden = false;
  }
  
  hide() {
    this.hidden = true;
  }

}
