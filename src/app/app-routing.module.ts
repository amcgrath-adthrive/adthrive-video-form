import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateAdInserterCodeComponent } from './generate-ad-inserter-code/generate-ad-inserter-code.component';

const routes: Routes = [
  { path: '', component: GenerateAdInserterCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
