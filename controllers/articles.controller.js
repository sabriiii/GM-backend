const { writeData, getData, getDataById } = require("../config/firestore")
const {generateId} = require("../utils/uuid")
const { uploadStorage } = require("../config/storage")

exports.createArticle = async (req, res) => {
    try{
        // verify all fields are present
        let id = generateId()
        let downloadUrl = await uploadStorage(req.file)
        writeData("articles", id , req.body)
        res.json({
            message: "added article",
            data: {
                ...req.body,
                id,
                url: downloadUrl
            }
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
 

exports.getListArticles = async (req, res) => {
    try{
        let querySnapshot = await getData("articles");
        let data = []
        querySnapshot.forEach((doc) => {
            data.push({
                ...doc.data(),
                id: doc.id
            })
          });
        res.json(data)
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
 

exports.getArticleById = async (req, res) => {
    try{
        let docSnap = await getDataById("articles", req.params.id)
        if(!docSnap.exists) return res.status(404).json("not found")
            res.json({
                ...docSnap.data(),
                id: docSnap.id
            })
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
 