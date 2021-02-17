import Vue from 'vue'
import App from './App.vue'

navigator.serviceWorker
  .register("firebase-messaging-sw.js")
  .then(function(registration) {
    console.log("Service Worker Registered!", registration);
  })
  .catch(function(err) {
    console.error("Service Worker registration failed", err);
  });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
