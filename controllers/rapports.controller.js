const { where } = require("firebase/firestore")
const { getDataByQuery, writeData } = require("../config/firestore")
const {generateId} = require("../utils/uuid")


exports.getListRapportsByPatients = async (req, res) => {
    try{
        let querySnapshot = await getDataByQuery("rapports", where("patientId", "==", req.params.patientId))
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

exports.addRapportToPatient = async (req, res) => {
    try{
        let id = generateId()
        writeData("rapports", id , {...req.body, patientId: req.params.patientId })
        res.json({
            message: "added article",
            data: {
                ...req.body,
                patientId: req.params.patientId,
                id,
            }
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}