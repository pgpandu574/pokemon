const {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
  getDoc,
} = require("firebase/firestore/lite");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const firebaseapp = require("./config/firebaseconfig");
const functions=require("firebase-function")

const fs = require("fs");
const app = express();
const port = 5000;
const firestore = getFirestore(firebaseapp);

app.use(cors());
app.use(bodyParser.json());

// Read data from a JSON file
const readData = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

// Save data to a JSON file
const saveData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

// Initialize data
if (!fs.existsSync("data.json")) {
  saveData({ users: [] });
}
const userCollection = collection(firestore, "users");
// Get all users
app.get("/users", async (req, res) => {
  const data = await (await getDocs(userCollection)).docs.map((u) => u.data());
  console.log({ data });
  res.send(data);
});

// Add a new user
app.post("/users", async (req, res) => {
  const newUser = req.body;
  const data = await (await getDocs(userCollection)).docs.map((u) => u.data());
  newUser.id = data.length + 1;
  await addDoc(userCollection, newUser);
  res.status(201).send(newUser);
});

// Update a user
app.put("/users/:id", async (req, res) => {
  const userQuery = query(userCollection, where("id", "==", req.params.id));
  const data = await getDocs(userQuery).docs.map((u) => u.data());

  if (data.length > 0) {
    const updatedUser = { ...data[0], ...req.body };
    await updateDoc(data[0].ref, updatedUser);
    res.send(updatedUser);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  const userQuery = query(userCollection, where("id", "==", req.params.id));
  await deleteDoc(getDocs(userQuery).docs[0].ref);
  data.users = data.users.filter((user) => user.id !== userId);
  saveData(data);
  res.status(204).send();
});
app.delete("/usersall", async (req, res) => {
  const data = (await getDocs(userCollection)).docs.data.forEach(
    async (user) => {
      await deleteDoc(user.ref);
    }
  );
  data.users = [];
  saveData(data);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


exports.api=functions.https.onRequest(app)