clone the repo
npm i
ionic cordova platform add android/ios // depending on the platform

ionic cordova plugin add ./custom-plugin/cordova-plugin-inappbrowser-pan // only if not installed.

for copying the ionic wrapper in the project.
cp -r ./custom-plugin/ionic-native-compiled/@ionic-native/plugins/in-app-browser-pan node_modules/@ionic-native/