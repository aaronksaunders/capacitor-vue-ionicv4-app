import Vue from 'vue'
import {IonicVueRouter} from '@ionic/vue'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
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
