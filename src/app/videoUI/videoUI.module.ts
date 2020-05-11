import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { VideoUI } from './videoUI.component';

const routes: Routes = [{ path: 'video-ui', component: VideoUI }];

@NgModule({
  imports: [
    YouTubePlayerModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [VideoUI],
  exports: [VideoUI, RouterModule]
})
export class VideoUIModule {}