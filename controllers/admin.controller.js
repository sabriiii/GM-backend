const { updateData } = require("../config/firestore")

exports.acceptDoctorRequests = async (req, res) => {
    try{
        // add verification of the doctor
        updateData("doctors", req.params.id, {
            actif: true
        })
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 