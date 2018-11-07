var firebase= require('firebase')


var config = {
    apiKey: "AIzaSyATziQn0Yns1WKMC-rvwg3Lj3cwFsz6GlU",
    authDomain: "portfolio-9dc2a.firebaseapp.com",
    databaseURL: "https://portfolio-9dc2a.firebaseio.com",
    projectId: "portfolio-9dc2a",
    storageBucket: "portfolio-9dc2a.appspot.com",
    messagingSenderId: "870250502448"
  };


if(!firebase.apps.length)
    firebase.initializeApp(config)

module.exports= firebase