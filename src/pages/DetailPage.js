import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import "./DetailPage.css"
import { UseFirebaseValue } from "../context/firebaseContext"
import Loding from '../components/Loding';


function DetailPage() {
                     
 const params = useParams()
 const firebase = UseFirebaseValue()

 const [data, setData] = useState("")
 const [url , SetUrl] = useState("")

 useEffect(() => {
    firebase.getDetailsById(params.bookID)
    .then(value => setData(value.data()))
 }, [])

 useEffect(() => {
    if(data){
       const imageURL = data.imageURL;
       firebase.getImageURL(imageURL).then(url => SetUrl(url))
    }
 }, [data])


// loding screen 
 if(data == ""){
    return (
     <Loding />
    )
 }



  return (
     <>
     <div className='container mt-5'>

        <div className='book-details'>
         <h2 className='heading'>{data.BookName}</h2>
          <img src={url} className="img" alt="book" />

          <div className='details mt-3'>
            <h3>{data.BookName}</h3>
            <p className='mt-3'>Price: ₹{data.Price}</p>
            <p >ISBN NUmber: {data.ISBN_Number}</p><hr width="200px"/><hr width="100px"/>
            <h2>Owner Details</h2>
            <p> Name: {data.displayName} </p>
            <p> Email: {data.userEmail} </p>
          </div>
          <button className='buy-btn'>Buy Now</button>

        </div>

     </div>

     </>
  )
}

export default DetailPage;
