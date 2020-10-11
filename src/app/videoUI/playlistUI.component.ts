import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  templateUrl: './playlistUI.component.html',
  selector: 'playlist-ui',
})
export class PlaylistUI implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {}

  isValid: boolean;
  safeUrl: SafeResourceUrl;

  ngOnInit() {
    this.route.queryParams.subscribe(parameters => {
      if (parameters.listId) {
        const baseEmbedUrl: any = 'https://www.youtube.com/embed/videoseries?list=';
        const autoPlayParam: any = '&autoplay=1&loop=1';
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(baseEmbedUrl + parameters.listId + autoPlayParam);
        this.isValid = true;
      }
    });
  }
}
