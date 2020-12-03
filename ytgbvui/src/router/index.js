import Vue from 'vue'
import VueRouter from 'vue-router'
import PlaylistUI from '../views/PlaylistUI'
import VideoUI from '../views/VideoUI'

Vue.use(VueRouter)

const routes = [
  {
    path: '/video-ui',
    name: 'VideoUI',
    component: VideoUI,
    props: route => ({ videoId: route.query.videoId })
  },
  {
    path: '/playlist-ui',
    name: 'PlaylistUI',
    component: PlaylistUI,
    props: route => ({ playlistId: route.query.playlistId })
  }
]

const router = new VueRouter({
  routes
})

export default router
