/* eslint-disable no-undef */
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Notification />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Notification from "./components/Notification.vue";
import firebase from "firebase/app";
import "firebase/messaging";

export default {
  name: "App",
  components: {
    HelloWorld,
    Notification
  },

  created() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAVazWZpKRdLWWTkKhCTbBQ2VSXMXDDCnU",
      authDomain: "test-92fa9.firebaseapp.com",
      databaseURL: "https://test-92fa9.firebaseio.com",
      projectId: "test-92fa9",
      storageBucket: "test-92fa9.appspot.com",
      messagingSenderId: "1010801819413",
      appId: "1:1010801819413:web:42e9ec25b43daa18e3331c",
      measurementId: "G-VZLGB28WCW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(function() {
        //MsgElem.innerHTML = "Notification permission granted."
        console.log("Notification permission granted.");

        // get the token in the form of promise

        return messaging.getToken();
      })
      .then(function(token) {
        // print the token on the HTML page
        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });

    messaging.onMessage(function(payload) {
      console.log(payload); //
      // eslint-disable-next-line no-unused-vars
      var notify;
      notify = new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
        tag: "Dummy"
      });
      console.log(payload.notification);
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
