import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SiteSettings } from '../models/siteSettings';

@Component({
  selector: 'app-generate-ad-inserter-code',
  templateUrl: './generate-ad-inserter-code.component.html',
  styleUrls: ['./generate-ad-inserter-code.component.css']
})
export class GenerateAdInserterCodeComponent implements OnInit {
  siteSettings: SiteSettings = new SiteSettings();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
}
