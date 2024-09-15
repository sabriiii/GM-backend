

exports.getListPatient = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

exports.getPatient = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

exports.updateProfilePatient = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 

exports.deletePatient = async (req, res) => {
    try{
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 