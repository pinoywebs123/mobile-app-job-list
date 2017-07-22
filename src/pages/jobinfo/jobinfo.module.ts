import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobinfoPage } from './jobinfo';

@NgModule({
  declarations: [
    JobinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(JobinfoPage),
  ],
  exports: [
    JobinfoPage
  ]
})
export class JobinfoPageModule {}
