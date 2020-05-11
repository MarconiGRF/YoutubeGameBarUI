import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideoUIModule } from './videoUI/videoUI.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
