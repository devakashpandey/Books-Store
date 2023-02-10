import {createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth , 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged,
 } from "firebase/auth"
 import { getFirestore, collection, addDoc } from "firebase/firestore"
 import { getStorage, ref, uploadBytes } from "firebase/storage"

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
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export const FirebaseReducer = ({children}) => {

   const [user, setUser] = useState("")

   useEffect(() => {
      onAuthStateChanged(firebaseAuth, user => {
         if(user) setUser(user)
         else setUser(null)
      })
   }, [])

 

    const signUpFunc = (email, password) =>
       createUserWithEmailAndPassword(firebaseAuth, email, password)
    
    const signinFunc = (email, password) => 
       signInWithEmailAndPassword(firebaseAuth, email, password)
    
    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)
    
    const isLoggedIn = user ? true : false; 

    const addNewListing = async (BookName, ISBN_Number, Price, coverPic) => {

       const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverPic.name}`)
       const uplodeResult = await uploadBytes(imageRef, coverPic)
       return await addDoc(collection(firestore, 'books'),{
         BookName,
         ISBN_Number,
         Price,
         imageURL: uplodeResult.ref.fullPath,
         userID: user.uid,
         userEmail: user.email,
         displayName: user.displayName,
         photoURL : user.photoURL
       })
      }                 


     return(
        <FirebaseContext.Provider value={{ 
         signUpFunc, 
         signinFunc, 
         signinWithGoogle, 
         isLoggedIn,
         addNewListing
          }}>

           {children}

        </FirebaseContext.Provider>
     )
  
}

export const UseFirebaseValue = () => useContext(FirebaseContext);

