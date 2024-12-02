// index.js
const express = require('express');
const app = express();
const port = 3000;
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });
const admin = require("firebase-admin");
const serviceAccount = require("./gabmed-bdc16-firebase-adminsdk-oa1x8-29e10a1ea1.json")


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<gabmed-bdc16>.firebaseio.com",
});
const db = admin.firestore();




async function main(message) {
    try{
        const chatCompletion = await getGroqChatCompletion("Est ce que ce message s'agit des symptomes d'une maladie? Répond avec Oui ou Non\n" +message);
        // Print the completion returned by the LLM.
        if(chatCompletion.choices[0]?.message?.content.toLowerCase()=="non"){
            return "Je ne peux pas répondre à ce type de questions."
        }
        else{
            let chat = await getGroqChatCompletion("Répond avec  le médecin de specialite à consulter et des étapes à suivre pour s'améliorer\n" +message);
            return chat.choices[0]?.message?.content;
        }
        
    }
    catch(e){
        return "J'ai eu un problème serveur. Veuillez essayer ultérierement."
    }
}

async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    model: "llama3-70b-8192",
  });
}
// Middleware to parse JSON bodies
app.use(express.json());

// POST route to accept JSON data and send a response
app.post('/chat', async(req, res) => {
    const receivedData = req.body.message;
    let response = await main(receivedData);
    const resp ={
        "message" : response
    }
    res.json(resp);
});
app.post('/doctor/register', async(req, res) => {
    const receivedData = req.body;
    try {
      // Save received doctor data to Firestore
      const docRef = await db.collection('doctor').add(receivedData);
      res.json({
        message: "success",
        docId: docRef.id, // Return document ID
      });
    } catch (error) {
      console.error("Error registering doctor:", error);
      res.status(500).json({
        message: "Failed to register doctor.",
        error: error.message,
      });
    }
});
app.post('/patient/register', async(req, res) => {
  const receivedData = req.body;
  try {
    // Save received doctor data to Firestore
    const docRef = await db.collection('patient').add(receivedData);
    res.json({
      message: "success",
      docId: docRef.id, // Return document ID
    });
  } catch (error) {
    console.error("Error registering patient:", error);
    res.status(500).json({
      message: "Failed to register patient.",
      error: error.message,
    });
  }
});

app.post('/center/register', async(req, res) => {
  const receivedData = req.body;
  try {
    // Save received doctor data to Firestore
    const docRef = await db.collection('center').add(receivedData);
    res.json({
      message: "success",
      docId: docRef.id, // Return document ID
    });
  } catch (error) {
    console.error("Error registering center:", error);
    res.status(500).json({
      message: "Failed to register center.",
      error: error.message,
    });
  }
});

app.post('/patient/login', async(req, res) => {
  const receivedData = req.body;
  try {
    // Reference the `patients` collection
    const patientsCollection = db.collection('patient');

    // Query for the document with the matching email and password
    const querySnapshot = await patientsCollection
      .where('email', '==', receivedData.email)
      .where('password', '==', receivedData.password) // Only if storing plaintext passwords
      .get();

    if (querySnapshot.empty) {
      const doctorCollection = db.collection('doctor');
      const doctorSnapshot = await doctorCollection
      .where('email', '==', receivedData.email)
      .where('password', '==', receivedData.password) // Only if storing plaintext passwords
      .get();
      if(doctorSnapshot.empty){
      res.json({})
      return;
      }
      const doctor = doctorSnapshot.docs[0].data();
      doctor.id = doctorSnapshot.docs[0].id;
      doctor.type = "doctor"
      res.json(doctor);
      return;
    }
    // Extract the first matching document (assuming unique emails)
    const patient = querySnapshot.docs[0].data();
    patient.id = querySnapshot.docs[0].id;
    patient.type = "patient"
    res.json(patient);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});
app.get("/doctor/getdoctors",async (req,res)=>{
  const collectionRef = db.collection("doctor");

    // Get all documents in the collection
    const snapshot = await collectionRef.get();
    if (snapshot.empty) {
      console.log("No documents found.");
      res.json([]);
    }
    const documentsArray = [];

    // Loop through documents and push data to the array
    snapshot.forEach((doc) => {
      documentsArray.push({ id: doc.id, ...doc.data() });
    });
    res.json(documentsArray);

})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


