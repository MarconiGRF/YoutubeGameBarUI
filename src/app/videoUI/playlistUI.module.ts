import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { PlaylistUI } from './playlistUI.component';

const routes: Routes = [
  { path: 'playlist-ui', component: PlaylistUI}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [PlaylistUI],
  exports: [PlaylistUI, RouterModule]
})
export class PlaylistUIModule {}