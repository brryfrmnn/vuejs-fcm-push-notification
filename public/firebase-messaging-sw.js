/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyAVazWZpKRdLWWTkKhCTbBQ2VSXMXDDCnU",
  authDomain: "test-92fa9.firebaseapp.com",
  databaseURL: "https://test-92fa9.firebaseio.com",
  projectId: "test-92fa9",
  storageBucket: "test-92fa9.appspot.com",
  messagingSenderId: "1010801819413",
  appId: "1:1010801819413:web:42e9ec25b43daa18e3331c",
  measurementId: "G-VZLGB28WCW"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: 'https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg' //your logo here
//   };

//   return self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});