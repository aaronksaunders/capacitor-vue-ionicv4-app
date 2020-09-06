# VueJS Ionic Capacitor Sample Application
> updated 9/5/2020
--
New UPDATED VueJS Ionic Capacitor Sample - Vue3 Ionic BETA - https://github.com/aaronksaunders/capacitor-vue3-ionicv5-app
--
```
Ionic:

   Ionic CLI       : 6.6.0 (/Users/aaronksaunders/.nvm/versions/node/v13.5.0/lib/node_modules/@ionic/cli)
   Ionic Framework : @ionic/vue 0.0.9

Capacitor:

   Capacitor CLI   : 2.0.2
   @capacitor/core : 2.0.2

Utility:

   cordova-res (update available: 0.14.0) : 0.11.0
   native-run                             : 1.0.0

System:

   NodeJS : v13.5.0 (/Users/aaronksaunders/.nvm/versions/node/v13.5.0/bin/node)
   npm    : 6.14.1
   OS     : macOS Catalina
```

---
<p align="center">
<img src="https://raw.githubusercontent.com/aaronksaunders/capacitor-vue-ionicv4-app/master/Screen%20Shot%202020-04-23%20at%209.33.16%20PM.png" width="66%" />
  </p>
  <p align="center">
  <strong><a href="https://www.youtube.com/playlist?list=PL2PY2-9rsgl2bgNTX9omlDisiWh1NYInz">Click To View Ionic VueJS Video Playlist</a></strong>
  </p>
---


### Other Ionic Vue Samples
- https://github.com/aaronksaunders/ionic4-vue-tabs
- https://github.com/aaronksaunders/icon-vue
- https://github.com/aaronksaunders/ionic-vue-picker-sample
- https://github.com/aaronksaunders/vue-ionic-demo
- https://github.com/aaronksaunders/capacitor-vue-ionicv4-app

### Sample Overview

- Using VueJS for basic application
- Capacitor Geolocation Plugin
- Capacitor Camera Plugin
- Cordova Barcode Scanner Plugin
- Live Reload Is Enabled

### Camera Working In PWA/Website

- see https://capacitor.ionicframework.com/docs/pwa-elements/

Installed PWA Elements
```
npm install @ionic/pwa-elements
```
Then opened up the `main.js` file in my vue project and made the following changes
```javascript
import { defineCustomElements } from '@ionic/pwa-elements/loader'; // <== NEW

Vue.config.productionTip = false;

Vue.use(Ionic);
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");

  defineCustomElements(window);  // <== NEW

```
and then the magic happened 

<p align="center">
<img src="https://raw.githubusercontent.com/aaronksaunders/capacitor-vue-ionicv4-app/master/Screen%20Shot%202019-05-25%20at%204.57.18%20PM.png" width='40%'>
<img src="https://raw.githubusercontent.com/aaronksaunders/capacitor-vue-ionicv4-app/master/Screen%20Shot%202019-05-25%20at%204.49.02%20PM.png" width='40%'>
  </p>

### Running Capacitor
```
npm run build
```
```
npx cap add <platform>
```
```
npx cap sync <platform>
```
```
npx cap open <platform>
```
  
### Adding A Non Capacitor Plugin
I am testing with the [Barcode Scanner Plugin](https://github.com/phonegap/phonegap-plugin-barcodescanner), you will need to install the plugin using `npm`
```
npm install phonegap-plugin-barcodescanner
```
and then in the source code you get access to the plugin off of the `window` object
```javascript
window.cordova.plugins.barcodeScanner.scan(
  function(result) { /* success */ },
  function(error) { /* error */ },
  { /* settings */ }
  );
```

### Important - Live Reload
For this project to work, I am running the vue application on local server and the ios project is loading the application from there.

To make live reload work, you need to configure your `capacitor.config.json` file, see documentation here on Ionic Website: https://capacitor.ionicframework.com/docs/basics/configuring-your-app/

Then you run your application as you would normally using the following command
```
npm run serve
```
In most situations, the application will be running on `localhost:8080` so the settings below should work. What I usually do is utilize the actual IP address of my computer when running so that I can test on a real device that is on the same network.

#### Live Reload Android Issues
**When using Android**, to get live reload to work, you might need to update your `AndroidManifest.xml` file; it can be found here: `android/app/src/main/AndroidManifest.xml`.

Then update the application tag to include `usesCleartextTraffic`
```xml
<application android:usesCleartextTraffic="true">
```

This is what the `capacitor.config.json` file shoudl look like when attempting to develop using live-reload
```
{
  "appId": "com.aks.vuehw",
  "appName": "vuehw",
  "bundledWebRuntime": false,
  "webDir": "dist",
    "server": {
      "url": "http://localhost:8080", // THIS LINE IN capacitor.config is making it happen
      "allowNavigation": [
        "example.org",
        "*.example.org",
        "192.0.2.1",
        "mapbox.com"
      ]
    }
}
```
This requires you to run the vue server locally using the following command
```
npm run serve
```
And the start the ios project using the capacitor commands
```
npx cap sync; npx cap open ios
```

### Turning Off Live Reload
Just remove the whole `server.url` section from the `capacitor.config.json` file
```json
{
  "appId": "com.aks.vuehw",
  "appName": "vuehw",
  "bundledWebRuntime": false,
  "webDir": "dist",
    "server": {
      "url": "http://localhost:8080", // REMOVE THIS LINE TO TURN OFF LIVE RELOAD  
      "allowNavigation": [
        "example.org",
        "*.example.org",
        "192.0.2.1",
        "mapbox.com"
      ]
    }
}
```
