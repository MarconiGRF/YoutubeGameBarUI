import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {YouTubePlayer} from '@angular/youtube-player';

@Component({
  templateUrl: './videoUI.component.html',
  selector: 'video-ui',
})
export class VideoUI implements OnInit {
  constructor(
    private route: ActivatedRoute,
    ) {}

  videoId: string;
  keyboardEvent: any;
  initMethod: any;

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.keyboardEvent = document.createEvent('KeyboardEvent');
    this.initMethod = typeof this.keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';

    this.route.queryParams.subscribe(parameters => {
      if (parameters.videoId) {
        this.videoId = parameters.videoId;
      }
    });
  }

  autoPlay(target: any) {
    target.playVideo();
  }
}
