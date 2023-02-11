import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UseFirebaseValue } from "../context/firebaseContext"
import "./BookCard.css"
import { useNavigate } from "react-router-dom"


const BookCard = (props) => {
  const firebase = UseFirebaseValue()

  let [url, setUrl] = useState(null)

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then(url => setUrl(url))
  }, [])

const navigate = useNavigate()

  return (
     <>
     <Card style={{ width: '19rem', margin:"33px" }} className="mt-5">
      <div className='my-card'>
      <Card.Img className='my-img' variant="" src={url}/>
      <Card.Body>
        <Card.Title>{props.BookName}</Card.Title>
        <Card.Text className='mt-3' >
          This is <span className='text-bold'>{props.BookName}</span> Full Course By <span className='text-bold'>{props.displayName}</span>  and 
          this book cost ₹<span className='text-bold'>{props.Price}</span>.
        </Card.Text>
        <Button onClick={(e) => navigate(`book/view/${props.id}`)} 
         variant="primary">View Course</Button>
      </Card.Body>
      </div>
    </Card>

     </>
  )
}

export default BookCard;
