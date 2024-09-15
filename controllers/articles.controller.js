const { updateData, writeData } = require("../config/firebase")
const {generateId} = require("../utils/uuid")

exports.createArticle = async (req, res) => {
    try{
        let id = generateId()
        // add PDF to firebase storage
        writeData("articles", id , req.body)
        res.json({
            message: "added",
            data: {
                ...req.body,
                id
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
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
 

exports.getArticle = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
 