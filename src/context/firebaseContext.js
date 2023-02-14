import {createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth , 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged,
    signOut
 } from "firebase/auth"

 import { 
   getFirestore, 
   collection, 
   addDoc, 
   getDocs, 
   doc, 
   getDoc,
   } from "firebase/firestore"

 import { 
   getStorage,
   ref, 
   uploadBytes,
   getDownloadURL
    } from "firebase/storage"

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
   }, [onAuthStateChanged])

 

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
      
   const listAllBooks = async () => await getDocs(collection(firestore, 'books'))
      
   const getImageURL = (path) => {
      return getDownloadURL(ref(storage, path))
   }

   const getDetails = async (id) =>{  
        let docRef = doc(firestore, "books", id)
         const result = await getDoc(docRef)
         return result;
   } 

   const placeOrder = async (bookID, qty) => {
       const collectionRef = collection(firestore, "books", bookID, "orders");
       const result = await addDoc(collectionRef, {
         userID: user.uid,
         userEmail: user.email,
         displayName: user.displayName,
         photoURL : user.photoURL,
         qty: Number(qty)
       })

       return result;
   }

   const logOut = () => signOut(firebaseAuth)


     return(
        <FirebaseContext.Provider value={{ 
         signUpFunc, 
         signinFunc, 
         signinWithGoogle, 
         isLoggedIn,
         addNewListing,
         listAllBooks,
         getImageURL,
         getDetails,
         placeOrder,
         logOut,
         user
          }}>

           {children}

        </FirebaseContext.Provider>
     )
  
}

export const UseFirebaseValue = () => useContext(FirebaseContext);

