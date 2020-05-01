<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start" @click="goBack()">
          <ion-icon name="arrow-back" style="font-size: 25px;"></ion-icon>
        </ion-buttons>
        <ion-title>Capacitor-VueJS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <h2>This is the Second Page</h2>
      <div>Showing the use of the location plugin and the vue-router for changing pages in the application</div>
      <pre>{{location}}</pre>
    </ion-content>
  </div>
</template>

<script>
import { Plugins } from "@capacitor/core";
const { Geolocation } = Plugins;

export default {
  name: "GeolocationPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      location: {}
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showDetail(_item) {
      console.log(_item);
    },
    async getLocation() {
      console.log("got getLocation event");

      let location = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 30000
      });
      console.log("location", location.coords);
      this.location =
        location.coords.latitude + " " + location.coords.longitude;
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
