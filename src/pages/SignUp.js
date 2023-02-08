import React,{ useEffect, useState } from 'react';
import "./SignUp.css";
import { UseFirebaseValue } from "../context/firebaseContext"
import { useNavigate } from "react-router-dom"

const SignUp = () => {

  const myFirebase = UseFirebaseValue();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("")

  useEffect(() => {
    if(myFirebase.isLogged){
      navigate("/")
    }
  }, [myFirebase, navigate])

  let submitForm = async (e) => {
       e.preventDefault()
       const result = await myFirebase.signUpFunc(email, password)
       alert("SignUp Successfull!!")
       
       setEmail("");
       SetPassword("");
  }

  const signIn = () => {
     navigate("/signin")
  }

  return (
     <>
     <div className='container wrapper'>
      <div className='sign-up'>

     <form className='signup-form' onSubmit={submitForm}>
          <center><h2>Sign Up</h2></center><br/>
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

        <button type="submit" className="btn btn-primary">Sign up</button>
        <hr/>
       <button onClick={signIn} type="submit" className="btn btn-success">Sign in here</button>
        
    </form>

     </div>
     </div>
     </>
  )
}

export default SignUp;
