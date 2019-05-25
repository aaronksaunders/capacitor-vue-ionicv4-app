# VueJS Ionic Capacitor Sample Application

- Using VueJS for basic application
- Geolocation Plugin
- Camera Plugin
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
Vue.use(VeeValidate);
// check if there is actually a user that has been
// saved by previous instance of Firebase...
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

### Important - Live Reload
For this project to work, I am runninng the vue application on local server and the ios project is loading the applictaion from there.

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
Just remove the whole server.url section from the `capacitor.config.json` file
```json
{
  "appId": "com.aks.vuehw",
  "appName": "vuehw",
  "bundledWebRuntime": false,
  "webDir": "dist",
    "server": {
      "allowNavigation": [
        "example.org",
        "*.example.org",
        "192.0.2.1",
        "mapbox.com"
      ]
    }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
