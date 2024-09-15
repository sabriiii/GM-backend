


exports.createArticle = async (req, res) => {
    try{
        res.json("added")
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
 