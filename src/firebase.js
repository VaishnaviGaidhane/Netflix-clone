// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDAbxwuMpTMA6_eGZ9QLfIb3NILeRyGKIs",
  authDomain: "netflix-clone-a1972.firebaseapp.com",
  projectId: "netflix-clone-a1972",
  storageBucket: "netflix-clone-a1972.firebasestorage.app",
  messagingSenderId: "671030846805",
  appId: "1:671030846805:web:0883040bb565e96107bbdc",
  measurementId: "G-QT8HVFBR11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//user sign up
const signup = async(name, email, password)=>{
    try{
       const res=  await createUserWithEmailAndPassword(auth,email,password);
       const user =res.user;
       await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
       });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}
const login = async(email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password );
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =()=>{
    signOut(auth);
}

export{auth, db, login, signup, logout};