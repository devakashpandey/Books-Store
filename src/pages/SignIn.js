import React, { useEffect, useState } from 'react';
import "./SignIn.css";
import { UseFirebaseValue } from "../context/firebaseContext"
import { useNavigate } from "react-router-dom"


const SignIn = () => {

  const myFirebase = UseFirebaseValue();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("")

  useEffect(() => {
    if(myFirebase.isLoggedIn){
      navigate("/")
    }
  }, [myFirebase, navigate])

  let submitForm = async (e) => {
       e.preventDefault()
       const result = await myFirebase.signinFunc(email, password)
       alert("SignIn Successfull!!")
       
       setEmail("");
       SetPassword("");

       console.log(result)
  }

  const googleSignin = () => myFirebase.signinWithGoogle()
  
  const signUp = () =>  navigate("/signup")


  return (
     <>
     <div className='container wrapper'>
      <div className='sign-in'>

     <form className="signin-form" onSubmit={submitForm}>
          <center><h2>Sign in</h2></center><br/>
        <div className="mb-3">
         <label className="form-label">Email address</label>
         <input type="email" className="form-control"
         placeholder='Enter email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
          <div className="form-text">We'll never share your 
            email with anyone else.</div>
        </div> 

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" 
         placeholder='Enter password' onChange={(e) => SetPassword(e.target.value)} value={password} />
      </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
        <hr/>
       <button onClick={googleSignin} type="submit" className="btn btn-danger">Signin With Google</button>
             <hr/>
       <button onClick={signUp} type="submit" className="btn btn-success">Sign up here</button>
    </form>
     </div>

    </div>
     </>
  )
}

export default SignIn;
