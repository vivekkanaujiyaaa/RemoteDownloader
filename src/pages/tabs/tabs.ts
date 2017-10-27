import { Component } from '@angular/core';

import { DownloadListPage } from "../download-list/download-list";
import { AddDownloadPage } from "../add-download/add-download";
import { SettingsPage } from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DownloadListPage;
  tab2Root = AddDownloadPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
