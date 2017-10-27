import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";


/**
 * Generated class for the DownloadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-list',
  templateUrl: 'download-list.html',
})
export class DownloadListPage {

  downloads = {};
  deleteResponse = {};
  errorMessage = "";
  isLoaded = false;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public rest: RestProvider
    ) {}


  getDownloads() {
    this.isLoaded = false;
    this.rest.init().then((values) => {
      this.rest.getDownloads().subscribe(
        downloads => {
          this.isLoaded = true;
          this.downloads = downloads;
        },
        error => this.errorMessage = <any>error
      );
    });
  }

  deleteDownload(id) {
    this.rest.deleteDownload(id).subscribe(
      response => {
        this.deleteResponse = response;
        this.getDownloads();
      },
      error => this.errorMessage = <any>error
    );
  }

  ionViewDidEnter() {
    this.getDownloads();
  }

  syncDownloads(event) {
    this.getDownloads();
  }

  deleteDownloads(event, id) {
    this.deleteDownload(id);
  }

  ionSelected(){
    alert("ok");
  }

}
