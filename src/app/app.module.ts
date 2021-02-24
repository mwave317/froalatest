import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageBuilderComponent } from './page-builder/page-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    PageBuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
