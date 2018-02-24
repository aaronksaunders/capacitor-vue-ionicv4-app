<template >
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <img :src="imageUrl ? imageUrl : null" />
      <ion-button @click="takePicture()">
        Take Picture Now
      </ion-button>
      <ion-button @click="nextPage()">
        Next Page
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { Capacitor, Plugins } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imageUrl: null
    };
  },
  methods: {
    nextPage() {
      this.$router.push("/second-page");
    },
    async takePicture() {
      let isAvailable = Capacitor.isPluginAvailable("Camera");

      if (!isAvailable) {
        // Have the user upload a file instead
        console.log("No Camera Aailable")
      } else {
        // Otherwise, make the call:
        console.log("got click event");
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: "base64"
        });
        // image.base64_data will contain the base64 encoded result as a JPEG, with the data-uri prefix added
        this.imageUrl = image.base64_data;
        // can be set to the src of an image now

        console.log(image);
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
