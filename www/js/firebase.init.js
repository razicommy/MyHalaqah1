    angular.module('firebaseConfig', ['firebase'])
      .run(function() {
        // Initialize Firebase
        var config = {
    apiKey: "AIzaSyCsOgAqzx-Sopv0tasl1sdPBLrNAgehn-o",
    authDomain: "rzkelabku.firebaseapp.com",
    databaseURL: "https://rzkelabku.firebaseio.com",
    projectId: "rzkelabku",
    storageBucket: "rzkelabku.appspot.com",
    messagingSenderId: "404432682397"
        };
        firebase.initializeApp(config);
      })