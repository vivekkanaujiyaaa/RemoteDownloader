import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settingsForm: FormGroup;
  apiUrl: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public storage: Storage,
    public alertCtrl: AlertController) {

    this.settingsForm = this.formBuilder.group({
      apiUrl: ['', Validators.required],
      description: [''],
    });

    storage.get('apiUrl').then((val) => {
       this.setApiUrl(val);
     });

  }

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Saved',
      subTitle: 'Your settings are being saved',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  setApiUrl(value) {
    this.apiUrl = value;
  }

  ionViewDidLoad() {
  }

  settingsFormSubmit() {
    this.storage.set('apiUrl', this.settingsForm.value.apiUrl);
    this.presentAlert();
  }

}
