
exports.Login = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
