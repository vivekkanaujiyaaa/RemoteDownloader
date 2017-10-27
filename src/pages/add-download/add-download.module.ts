import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDownloadPage } from './add-download';

@NgModule({
  declarations: [
    AddDownloadPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDownloadPage),
  ],
})
export class AddDownloadPageModule {}
