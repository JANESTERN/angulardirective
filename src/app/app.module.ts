import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    AddComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
