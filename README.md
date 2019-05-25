# my-vue-app

for this project to work, I am runninng the vue application on local server and the ios project is loading the applictaion from there.

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
