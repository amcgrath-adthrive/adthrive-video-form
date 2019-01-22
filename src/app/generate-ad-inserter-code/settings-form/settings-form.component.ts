import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SiteSettings } from '../../models/siteSettings';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css']
})
export class SettingsFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter();

  form = new FormGroup({
    siteId: new FormControl(),
    playerId: new FormControl(),
    playlistId: new FormControl(),
    title: new FormControl(),
    titleImage: new FormControl(),
    shuffle: new FormControl(),
    sticky: new FormControl(),
    float: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const siteSettings = new SiteSettings();
    siteSettings.siteId = this.form.get('siteId').value;
    siteSettings.playerId = this.form.get('playerId').value;
    siteSettings.playlistId = this.form.get('playlistId').value;
    siteSettings.videoTitle = this.form.get('title').value;
    siteSettings.titleImage = this.form.get('titleImage').value;
    siteSettings.shuffle = this.form.get('shuffle').value;
    siteSettings.sticky = this.form.get('sticky').value;
    siteSettings.float = this.form.get('float').value;

    this.formSubmitted.emit(siteSettings);
  }

}
