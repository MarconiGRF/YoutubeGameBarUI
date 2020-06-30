import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideoUIModule } from './videoUI/videoUI.module'
import { PlaylistUIModule } from './videoUI/playlistUI.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoUIModule,
    PlaylistUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
