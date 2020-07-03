import { Component, OnInit, SecurityContext } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'
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
      if (parameters['listId']) {
        let baseEmbedUrl: String = "https://www.youtube.com/embed/videoseries?list=";
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(baseEmbedUrl + parameters['listId']);
        this.isValid = true;
      }
    });
  }
}
