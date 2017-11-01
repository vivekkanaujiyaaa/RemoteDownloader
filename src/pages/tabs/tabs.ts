import { Component } from '@angular/core';

import { DownloadListPage } from "../download-list/download-list";
import { AddDownloadPage } from "../add-download/add-download";
import { SettingsPage } from "../settings/settings";
import { RestProvider } from "../../providers/rest/rest";

declare var FCMPlugin;
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DownloadListPage;
  tab2Root = AddDownloadPage;
  tab3Root = SettingsPage;
  response = {};
  errorMessage = "";

  constructor(public rest: RestProvider) {
    FCMPlugin.getToken(
      (token) => {
        this.sendMobileToken(token);
    });
  }

  sendMobileToken(token) {
    var data = {
      "token": token
    };

    this.rest.init().then((values) => {
      this.rest.postMobileToken(data).subscribe(
        response => this.response = response,
        error => this.errorMessage = <any>error
      )
    });

  }
}
