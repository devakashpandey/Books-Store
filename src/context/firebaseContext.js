import {createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth , 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from "firebase/auth"

const FirebaseContext = createContext() 

const firebaseConfig = {
 apiKey: "AIzaSyD4Tc5e3QNGksaYL7grGYQAPSOsybZlWJQ",
 authDomain: "booksstore-5bf50.firebaseapp.com",
 projectId: "booksstore-5bf50",
 storageBucket: "booksstore-5bf50.appspot.com",
 messagingSenderId: "864668426588",
 appId: "1:864668426588:web:1a25674362ca092c54e199"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)

export const FirebaseReducer = ({children}) => {

    const signUpFunc = (email, password) =>{
       return(
        createUserWithEmailAndPassword(firebaseAuth, email, password)
       )
    }

    const signinFunc = (email, password) =>{
        return(
            signInWithEmailAndPassword(firebaseAuth, email, password)
        )
     }
    

     return(
        <FirebaseContext.Provider value={{ signUpFunc, signinFunc }}>
           {children}
        </FirebaseContext.Provider>
     )
  
}

export const UseFirebaseValue = () => useContext(FirebaseContext);

