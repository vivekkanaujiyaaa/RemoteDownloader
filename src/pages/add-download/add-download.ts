import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the AddDownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-download',
  templateUrl: 'add-download.html',
})
export class AddDownloadPage {

  directories = {};
  response = {};
  errorMessage = "";
  addDownloadForm: FormGroup;
  currentDirectory = "";
  subDirectory = 0;
  serverInfos = {};
  isLoaded = false;
  inputValue = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private clipboard: Clipboard) {

    this.addDownloadForm = this.formBuilder.group({
      linkToDownload: ['', Validators.required],
      description: [''],
    });

    this.serverInfos["alive"] = true;
  }

  getServerInfos() {
    this.rest.getServerInfos().subscribe(
      serverInfos => this.serverInfos = serverInfos,
      error => this.errorMessage = <any>error
    );
  }

  getDirectories(path) {
    this.isLoaded = false;
    this.rest.init().then((values) => {
      this.rest.getDirectories(path).subscribe(
        directories => {
          this.isLoaded = true;
          this.directories = directories
        },
        error => this.errorMessage = <any>error
      );
    });
  }

  sendLinkToDownload(data) {
    this.rest.postDonwload(data).subscribe(
      response => this.response = response,
      error => this.errorMessage = <any>error
    );
  }

  ionViewDidLoad() {
    this.getDirectories("/");
  }

  ionViewDidEnter() {
    this.getDirectories("/");
  }

  addDownloadFormSubmit() {
    //this.addDownloadForm.value.linkToDownload = "http://ipv4.download.thinkbroadband.com/5MB.zip";


    var data = {
      "link": this.addDownloadForm.value.linkToDownload,
      "directory": this.currentDirectory
    };

    this.sendLinkToDownload(data);
    console.log(this.addDownloadForm.value.linkToDownload);
    this.presentAlert();
  }

  goBack($event) {
    this.getDirectories(this.directories["parentDirectory"]);
  }

  goTo(event, directory) {
    this.getDirectories(this.directories["rootPathDirectory"] + "/" + directory);
  }

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ok',
      subTitle: 'Your download has been started',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  pastLink() {
    this.clipboard.paste().then(
      (resolve: string) => {
        this.inputValue = resolve;
        this.addDownloadForm.value.linkToDownload = resolve;
      },
      (reject: string) => {
        alert('Error: ' + reject);
      }
    );
  }

  resetInputValue() {
    this.inputValue = "";
  }

}
