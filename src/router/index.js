import Vue from 'vue'
import Router from 'vue-router'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CameraPage',
      component: CameraPage
    },
    {
      path: '/geo-location-page',
      name: 'GeolocationPage',
      component: GeolocationPage
    }
  ]
})
