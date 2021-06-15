import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser-pan/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab: InAppBrowser
  ) {}

  openBrowser() {
    const options: InAppBrowserOptions = {
      toolbarcolor: '#11205d',
      footer: 'yes',
      showOnlyHostname: 'yes',
      locationTextColor: '#FFFFFF',
      helpButtonText: 'Help',
      helpButtonColor: '#367EB5',
      closebuttoncaption: 'Close-1',
      closebuttoncolor: '#FFFF00',
      // closeButtonFontFamily: 'stint_ultra',
      footerText: 'Your data never leaves your phone without your consent. Pan never sells your data.',
      footerTextColor: '#132059',
      footerImage: 'lock.png', //with ext will look into /assets/icon folder
      // footerFontFamily: 'stint_ultra', //only name, will pick from /assets/fonts/ folder
      // locationFontFamily: 'stint_ultra',
      // helpFontFamily: 'stint_ultra',
    };
    const iab = this.iab.create('https://linkedin.com', '_blank', options);

    iab.on('helpclick').subscribe(e => {
      alert('help clicked' + JSON.stringify(e));
    });

    iab.on('exit').subscribe(e => {
      alert('exit' + JSON.stringify(e));
    });
  }
}
