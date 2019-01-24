import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SiteSettings } from '../../models/siteSettings';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent implements OnInit {
  @Input() siteSettings: SiteSettings;

  collapseCode = '';
  sekindoDesktopCode = '';
  sekindoMobileCode = '';

  currentTabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateCollapseCode();
    this.updateSekindoDesktopCode();
    this.updateSekindoMobileCode();
  }

  private updateCollapseCode() {
    const sticky = this.siteSettings.sticky ? 'playerDiv.dataset.sticky = "";' : '';
    const shuffle = this.siteSettings.shuffle ? 'playerDiv.dataset.shuffle = "";' : '';
    const float = this.siteSettings.float ? 'playerDiv.dataset.float = "";' : '';
    this.collapseCode = `<script id="adthrive_collapse_script_desktop">

    const collapseExperimentCheck = setInterval(function(){
      if(window.adthrive && typeof window.adthrive.videoExperimentActive !== 'undefined'){
        if(!window.adthrive.videoExperimentActive) {
          const jwScript = document.createElement('script');
          jwScript.type = 'text/javascript';
          jwScript.src = 'https://content.jwplatform.com/libraries/${this.siteSettings.playerId}.js';
          jwScript.onload = function(){
            const collapseScript = document.createElement('script');
            collapseScript.type = 'text/javascript';
            collapseScript.src = 'https://ads.adthrive.com/video/52e41fac28963d1e058a0fdf.js';
            pNode.appendChild(collapseScript);
          }

          const div = document.createElement('div');
          div.className = 'player-container';
          div.setAttribute('style', 'margin: 0px auto;width: 90%');

          const innerDiv = document.createElement('div');
          innerDiv.className = 'player-position';

          const playerDiv = document.createElement('div');
          playerDiv.id = 'player';
          playerDiv.dataset.plid = '${this.siteSettings.playlistId}';
          ${sticky}
          ${shuffle}
          ${float}

          const span = document.createElement('span');
          span.innerHTML = '<img src="${this.siteSettings.titleImage}">${this.siteSettings.videoTitle}';
          span.className = 'copy';

          innerDiv.appendChild(span);
          innerDiv.appendChild(playerDiv);
          div.appendChild(innerDiv);

          const pNode = document.getElementById('adthrive_collapse_script_desktop').parentNode;

          pNode.appendChild(jwScript);
          pNode.appendChild(div);
        }
        clearInterval(collapseExperimentCheck);
      }
    }, 50);

    </script>`;
  }

  private updateSekindoDesktopCode() {
    this.sekindoDesktopCode = `<script id="adthrive_sekindo_script_desktop">

    const sekindoDesktopExperimentCheck = setInterval(function(){
      if(window.adthrive && window.adthrive.videoExperimentOn !== 'undefined'){
        if(!window.adthrive.videoExperimentOn) {

          const sekindoScript = document.createElement('script');
          sekindoScript.type = 'text/javascript';
          sekindoScript.src = 'https://live.sekindo.com/live/liveView.php?s=78511&cbuster=%%CACHEBUSTER%%&pubUrl=%%REFERRER_URL_ESC_ESC%%&vp_contentFeedId=${this.siteSettings.playlistId}&subId=${this.siteSettings.siteId}';
          sekindoScript.defer = true;

          const pNode = document.getElementById('adthrive_sekindo_script_desktop').parentNode;

          pNode.appendChild(sekindoScript);
        }
        clearInterval(sekindoDesktopExperimentCheck);
      }
    }, 50);

    </script>`;
  }

  private updateSekindoMobileCode() {
    this.sekindoMobileCode = `<script id="adthrive_sekindo_script_mobile">

    const sekindoMobileExperimentCheck = setInterval(function(){
      if(window.adthrive && window.adthrive.videoExperimentOn !== 'undefined'){
        if(!window.adthrive.videoExperimentOn) {
          const div = document.createElement('div');
          const strong = document.createElement('strong');
          strong.innerHTML = '${this.siteSettings.videoTitle}';
          const center = document.createElement('center');

          const sekindoScript = document.createElement('script');
          sekindoScript.type = 'text/javascript';
          sekindoScript.src = 'https://live.sekindo.com/live/liveView.php?s=87493&cbuster=%%CACHEBUSTER%%&pubUrl=%%REFERRER_URL_ESC_ESC%%&x=340&y=260&vp_contentFeedId=${this.siteSettings.playlistId}&subId=${this.siteSettings.siteId}';
          sekindoScript.defer = true;

          div.appendChild(strong);
          div.appendChild(sekindoScript);
          center.appendChild(div);
          const pNode = document.getElementById('adthrive_sekindo_script_mobile').parentNode;

          pNode.appendChild(center);
        }
        clearInterval(sekindoMobileExperimentCheck);
      }
    }, 50);

    </script>`;
  }

  copyText(): void {
    let textToCopy = '';

    switch (this.currentTabIndex) {
      case 0:
        textToCopy = document.getElementById('collapseCode').textContent;
        break;
      case 1:
        textToCopy = document.getElementById('sekindoDesktopCode').textContent;
        break;
      case 2:
        textToCopy = document.getElementById('sekindoMobileCode').textContent;
        break;
    }

    const textArea = document.createElement('textarea');
    textArea.textContent = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }

  tabChange(tabChangeEvent: MatTabChangeEvent): void {
    this.currentTabIndex = tabChangeEvent.index;
  }

}
