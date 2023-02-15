import React, { useEffect, useState } from 'react'
import "./Home.css"
import { UseFirebaseValue} from "../context/firebaseContext"
import BookCard from '../components/BookCard'
import CardGroup from 'react-bootstrap/CardGroup';
import Loding from '../components/Loding';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const firebase =  UseFirebaseValue()
   const navigate = useNavigate()
   const [books, setBooks] = useState("")

   useEffect(() => {
     firebase.listAllBooks() // it returns a promise
     .then(data => setBooks(data.docs))  
   }, [])

   if(books == ""){
     return (
        <Loding />
     )
   }

   const signOut = () => {
      firebase.logOut().then(() => {
        alert("LogOut Successfull!!")
        navigate("/signin")
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
     <>
     <div className='container-fluid text-center mt-5'>
     <button className="my-logout-btn" onClick={signOut}>Log out</button><br/>
     
     <div className='home-div mt-5'>
     <h1>WELCOME TO BOOKS STORE</h1> <br/>
     <h3>All Books Are Here</h3>

     <div className='books'>
   <CardGroup>
        { books.map((book, id) => {
           return(
            
            <div className='book-card' key={id}>
            <BookCard { ...book.data() }  id={book.id} />
            </div>
           ) 
        }) }

</CardGroup>
      
     </div>
     </div>
     </div>

     </>
  )
}

export default Home;
