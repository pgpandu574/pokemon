// Import the functions you need from the SDKs you need
const{ initializeApp } =require( "firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAWwN9u0ZXREgoGiiHTE1Juk20RHjan8Dw",
  authDomain: "pokemon-demo-6a02a.firebaseapp.com",
  projectId: "pokemon-demo-6a02a",
  storageBucket: "pokemon-demo-6a02a.appspot.com",
  messagingSenderId: "681788103172",
  appId: "1:681788103172:web:082f048a51c0ca6eb6f351",
  measurementId: "G-YWDKTMDXCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports=app;

