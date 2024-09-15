

exports.getListRapports = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

exports.getRapport = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

exports.addRapport = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}