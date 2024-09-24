const { updateData, deleteData, getData, getDataById } = require("../config/firestore");


exports.getListPatient = async (req, res) => {
    try{
        let querySnapshot = await getData("patients");
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

exports.getPatient = async (req, res) => {
    try{
        let docSnap = await getDataById("patients", req.params.id)
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

exports.updateProfilePatient = async (req, res) => {
    try{
        updateData("patients", req.params.id, req.body)
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 

exports.deletePatient = async (req, res) => {
    try{
        deleteData("doctors", req.params.id)
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 