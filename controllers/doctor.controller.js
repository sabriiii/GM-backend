const { updateData, deleteData, getData, getDataById } = require("../config/firestore");


exports.getListDoctors = async (req, res) => {
    try{
        let querySnapshot = await getData("doctors");
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
 


exports.getDoctor = async (req, res) => {
    try{
        let docSnap = await getDataById("doctors", req.params.id)
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
 


exports.updateDoctorProfile = async (req, res) => {
    try{
        updateData("doctors", req.params.id, req.body)
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
 
exports.deleteDoctor = async (req, res) => {
    try{
        deleteData("doctors", req.params.id)
        res.json("added")
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
} 
