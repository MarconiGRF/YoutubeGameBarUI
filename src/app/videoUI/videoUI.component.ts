import { Component, OnInit, enableProdMode } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './videoUI.component.html',
  selector: 'video-ui',
})
export class VideoUI implements OnInit {
  constructor(
    private route: ActivatedRoute,
    ) {}

  mediaUrl: string;

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    
    this.route.queryParams.subscribe(parameters => {
      if (parameters['mediaUrl']) {
        this.mediaUrl = parameters['mediaUrl'];
      }
    });
  }
}