import React from 'react'
import "./Home.css"
import { UseFirebaseValue } from "../context/firebaseContext"


const Home = () => {
 
 const signOut = UseFirebaseValue()

  return (
     <>
     <div className='home-div'>
     <h1>WELCOME TO THE HOME PAGE</h1>
     <button onClick={() => signOut.myLogout()} className='btn btn-primary'>Log Out</button>
     </div>
     </>
  )
}

export default Home;
