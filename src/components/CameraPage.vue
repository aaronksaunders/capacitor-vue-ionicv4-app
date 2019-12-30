<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Capacitor - VueJS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <img :src="imageUrl ? imageUrl : null" />
      <ion-button @click="takePicture()">Take Picture Now</ion-button>
      <ion-button @click="nextPage()">Next Page</ion-button>
      <ion-button @click="scan()">SCAN</ion-button>
    </ion-content>
  </div>
</template>

<script>
import {
  Plugins,
  CameraSource,
  CameraResultType,
} from "@capacitor/core";
const { Camera } = Plugins;


export default {
  name: "CameraPage",
  data() {
    return {
      msg: "Welcome to Your Vue Capacitor App",
      imageUrl: null
    };
  },
  methods: {
    scan() {
       window.cordova.plugins.barcodeScanner.scan(
        function(result) {
          alert(
            "We got a barcode\n" +
              "Result: " +
              result.text +
              "\n" +
              "Format: " +
              result.format +
              "\n" +
              "Cancelled: " +
              result.cancelled
          );
        },
        function(error) {
          alert("Scanning failed: " + error);
        },
        {
          preferFrontCamera: true, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt: "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      );
    },
    nextPage() {
      this.$router.push("/geo-location-page");
    },
    async takePicture() {
      let isAvailable = true;

      if (!isAvailable) {
        // Have the user upload a file instead
        alert("No Camera Aailable");
      } else {
        // Otherwise, make the call:

        try {
          const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Prompt
          });
          console.log("image", image);
          // image.base64_data will contain the base64 encoded result as a JPEG, with the data-uri prefix added
          this.imageUrl = image.dataUrl;
          // can be set to the src of an image now

          console.log(image);
        } catch (e) {
          console.log("error", e);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
