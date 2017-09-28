import { HelloListComponent } from './hello-list/hello-list.component';
import { WarningComponent } from './warning/warning.component';
import { AlertComponent } from './alert/alert.component';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <alert>
      Demo content
    </alert>
    <button (click)="showAlert()">Show Alert</button>
    <warning #first type="info"></warning>
    <warning type="danger"></warning>
    <warning type="success"></warning>

    <button (click)="firstWarning()">Access first warning</button>

    <h3>Demo contentChild, contentChildren</h3>
    <hello-list #helloList>
      <hello name="World" (getCurrentColor) = handleGetCurrentColor($event)></hello>
      <hello name="Other World" (getCurrentColor) = handleGetCurrentColor($event)></hello>
      <hello #last name="Last World"></hello>
    </hello-list>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //access Child component
  @ViewChild(AlertComponent) alert: AlertComponent;

  //in @ViewChild you can pass the type or the local template variable name
  @ViewChild('first') warningFirst: WarningComponent;
  @ViewChild(HelloListComponent) helloList: HelloListComponent;


  //access children components
  //Note:we can use AlertComponent in this case
  @ViewChildren(WarningComponent) warnings: QueryList<WarningComponent>

  showAlert() {
    this.alert.show();
  }

  firstWarning(){
    this.warningFirst.warning();
  }

  handleGetCurrentColor(event){
    alert('current color:' + event);
  }

  ngAfterViewInit(){
    this.warnings.forEach(warningInstance => console.log(warningInstance));
    console.log(this.helloList);
  }
}
