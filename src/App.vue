<template>
  <ion-app>
    <keep-alive>
    <ion-vue-router />
    </keep-alive>
  </ion-app>
</template>

<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>
<script>
export default {
  name: "App"
};
</script>

<style>
ion-navbar.toolbar.toolbar-ios.statusbar-padding,
ion-navbar.toolbar-ios ion-title.title-ios,
ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
ion-toolbar.toolbar-ios ion-title.title-ios {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
</style>
