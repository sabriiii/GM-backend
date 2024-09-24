const { getFirestore } = require("firebase/firestore");
const { doc, setDoc, deleteDoc, getDoc, getDocs, collection, query } = require("firebase/firestore"); 
const { app } = require("./firebase")


const database = getFirestore(app);

exports.writeData = (collection, Id, data) => {
    setDoc(doc(database, collection, Id), data);
}

exports.deleteData = (collection, Id) => {
    deleteDoc(doc(database, collection, Id));
}

exports.getDataById = (collection, Id) => {
    const docRef = doc(database, collection, Id);
    return getDoc(docRef)
}

exports.getDataByQuery = (col, condition) => {
    const docRef = query(collection(database, col), condition);
    return getDocs(docRef);
}
exports.getData = async (col) => {
    return getDocs(collection(database, col));
}

exports.updateData = (collection, Id, data) => {
    setDoc(doc(database, collection, Id), data, { merge: true });
}