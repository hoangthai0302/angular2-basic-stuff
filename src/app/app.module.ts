import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { WarningComponent } from './warning/warning.component';
import { HelloComponent } from './hello/hello.component';
import { HelloListComponent } from './hello-list/hello-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    WarningComponent,
    HelloComponent,
    HelloListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
