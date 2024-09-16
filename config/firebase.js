const {initializeApp} = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyDqm_tpcrahvU-wg6iHRMQ2B5K3XvWTRFs",
    authDomain: "gm-sabri.firebaseapp.com",
    databaseURL: "https://gm-sabri-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gm-sabri",
    storageBucket: "gm-sabri.appspot.com",
    messagingSenderId: "233079585664",
    appId: "1:233079585664:web:aaba068d31e50f11da1f65",
    measurementId: "G-C4HPX1B6N9"
  };

exports.app = initializeApp(firebaseConfig);