const {initializeApp} = require("firebase/app");
const {getDatabase} = require("firebase/database");
const { getFirestore } = require("firebase/firestore");
const { doc, setDoc, deleteDoc, getDoc } = require("firebase/firestore"); 

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

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

exports.writeData = (collection, Id, data) => {
    setDoc(doc(database, collection, Id), data);
}

exports.deleteData = (collection, Id) => {
    deleteDoc(doc(database, collection, Id));
}

exports.getData = (collection, Id) => {
    const docRef = doc(database, collection, Id);
    getDoc(docRef)
    .then((docSnap) => {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });
}

exports.updateData = (collection, Id, data) => {
    setDoc(doc(database, collection, Id), data, { merge: true });
}