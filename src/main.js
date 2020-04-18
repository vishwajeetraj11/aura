import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import generalFunctions from './functions/generalFunctions'
import './style.css'
import marked from 'marked';

Vue.mixin({
  methods: {
    marked: function(input) {
      return marked(input);
    }
  }
});



Vue.config.productionTip = false
Vue.mixin(generalFunctions); 
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
