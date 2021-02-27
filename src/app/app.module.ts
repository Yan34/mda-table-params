import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableParamsSelectComponent } from './table-params-select/table-params-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TableParamsSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
