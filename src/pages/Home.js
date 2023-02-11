import React, { useEffect, useState } from 'react'
import "./Home.css"
import { UseFirebaseValue} from "../context/firebaseContext"
import BookCard from '../components/BookCard'
import CardGroup from 'react-bootstrap/CardGroup';
import Loding from '../components/Loding';

const Home = () => {
   const firebase =  UseFirebaseValue()
  
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

  return (
     <>
     <div className='container-fluid text-center mt-5'>
      <div className='home-div'>
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
