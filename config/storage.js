const { getStorage, uploadBytesResumable, getDownloadURL, ref } = require("firebase/storage")
const { app } = require("./firebase")

const storage = getStorage(app)

exports.uploadStorage = async (file)=>{
    let dateTime = new Date();
    let storageRef = ref(storage, `articles/${dateTime.toISOString()+file.originalname}`);
    let metadata = {
        contentType: file.mimeType
    }
    let snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata)

    return getDownloadURL(snapshot.ref)
}