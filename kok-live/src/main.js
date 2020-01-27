import Vue from 'vue'
import App from './App.vue'

import VueVideoPlayer from 'vue-video-player'


// require videojs style
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueVideoPlayer,
  /* {
  options: global default options,
  events: global videojs events
} */
)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')