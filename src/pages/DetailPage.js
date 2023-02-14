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
 const [qty, setQty] = useState("")

 useEffect(() => {
   firebase.getDetails(params.bookID)
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

 const placeOrder = async () =>{
   const result = await firebase.placeOrder(params.bookID, qty)
    alert("Order Placed!!")
 }



  return (
     <>
     <div className='container mt-5 main-div'>
     {/* <center><h2 className='heading'>{data.BookName}</h2></center> */}
        <div className='book-details'>
         
          <img src={url} className="img" alt="book" />
         </div>

          <div className='details mt-3'>
            <h2>{data.BookName}</h2>
            <p className='mt-3'>Price: ₹{data.Price}</p>
            <p >ISBN NUmber: {data.ISBN_Number}</p><hr width="200px"/><hr width="100px"/>
            <h2>Owner Details</h2>
            <p> Name: {data.displayName} </p>
            <p> Email: {data.userEmail} </p>

            <label className="form-label">Quantity:</label>
            <input type="number" className="form-control qty"
             placeholder='Qty' onChange={(e) => setQty(e.target.value)} value={qty}/>
            <button onClick={placeOrder} className='buy-btn mt-3'>Buy Now</button>
          </div>

        </div>
     </>
  )
}

export default DetailPage;
