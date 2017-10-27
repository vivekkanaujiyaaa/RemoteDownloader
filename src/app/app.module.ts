import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { DownloadListPage } from "../pages/download-list/download-list";
import { DownloadListPageModule } from "../pages/download-list/download-list.module";
import { AddDownloadPage } from "../pages/add-download/add-download";
import { AddDownloadPageModule } from "../pages/add-download/add-download.module";
import { SettingsPage } from "../pages/settings/settings";
import { SettingsPageModule } from "../pages/settings/settings.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    ProgressBarComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    DownloadListPageModule,
    AddDownloadPageModule,
    SettingsPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydownloaderdb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DownloadListPage,
    AddDownloadPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
