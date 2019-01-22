import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateAdInserterCodeComponent } from './generate-ad-inserter-code/generate-ad-inserter-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTabsModule, MatButtonModule, MatCardModule } from '@angular/material/';
import { CodeViewerComponent } from './generate-ad-inserter-code/code-viewer/code-viewer.component';
import { SettingsFormComponent } from './generate-ad-inserter-code/settings-form/settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateAdInserterCodeComponent,
    CodeViewerComponent,
    SettingsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
