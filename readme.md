
clone the repo

install all the dependencies.
"npm i"

install your platform android or ios
"ionic cordova platform add android/ios"

For installation of the plugin
"ionic cordova plugin add ./custom-plugin/cordova-plugin-inappbrowser-pan"

for installing the wrapper

first install "@ionic-native/core"
"npm i @ionic-native/core -s"

then install custom wrapper.
"npm i -s ./custom-plugin/iab-pan.tgz"

for removing the plugin
"ionic cordova plugin rm cordova-plugin-inappbrowser-pan"

for removing the wrapper
"npm uninstall @ionic-native/in-app-browser-pan"
