import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser-pan/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController
  ) {}

  openBrowser() {
    const options: InAppBrowserOptions = {
      toolbarcolor: '#11205d',
      footer: 'no',
      locationTextColor: '#FFFFFF',
      helpButtonText: 'Help',
      helpButtonColor: '#367EB5',
      helpPopUpText: 'This is a popup text appear on help button click.',
      closebuttoncaption: 'close-1',
      closebuttoncolor: '#FFFF00',
      footerText: 'Your data never leaves your phone without your consent. Pan never sells your data.',
      footerTextColor: '#132059',
      footerImage: 'lock.png', //with ext will look into /assets/icon folder
      footerFontFamily: 'stint_ultra', //only name, will pick from /assets/fonts/ folder
      closeButtonFontFamily: 'stint_ultra',
      locationFontFamily: 'stint_ultra',
      helpFontFamily: 'stint_ultra',
      iosFooterFontFamily: 'StintUltraCondensed-Regular', //only name, will pick from /assets/fonts/ folder
      iosCloseButtonFontFamily: 'StintUltraCondensed-Regular',
      iosLocationFontFamily: 'StintUltraCondensed-Regular',
      iosHelpFontFamily: 'StintUltraCondensed-Regular',
    };
    const iab = this.iab.create('https://linkedin.com', '_blank', options);

    iab.on('exit').subscribe(e => {
      alert('exit' + JSON.stringify(e));
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }
}
