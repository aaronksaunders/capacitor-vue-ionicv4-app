<template >
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start" @click="goBack()">
          <ion-icon name="arrow-back" style="font-size: 25px;"></ion-icon>
        </ion-buttons>
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <h2>This is the Second Page</h2>
      <ion-item v-for="f in favorites" :key="f.id">
        <ion-label full style="color:black" @click="showDetail(f)">
          [ {{f.type}} ] {{f.name}} - {{f.link}}</ion-label>
        <!-- <button ion-button @click="removeFromFavorites(f.id)">DELETE</button> -->
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { Plugins, GeolocationOptions } from "@capacitor/core";
const { Geolocation } = Plugins;

export default {
  name: "SecondPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      faorites: [
        { id: 1, name: "name1", type: "type1", link: "www.linkOne.com" },
        { id: 1, name: "name1-a", type: "type1", link: "www.name1-a.com" },
        { id: 1, name: "name3", type: "type3", link: "www.name3.com" },
        { id: 1, name: "name4", type: "type4", link: "www.name4.com" }
      ]
    };
  },
  methods: {
    onCreate() {},
    goBack() {
      this.$router.go(-1);
    },
    showDetail(_item) {
      console.log(_item);
    },
    async getLocation() {
      console.log("got getLocation event");

      const location = await Geolocation.getCurrentPosition({
        enableHighAccuracy : true,
        timeout : 3000,
        maximumAge : 3000,        
      });
      console.log(location);
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
