import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UseFirebaseValue } from "../context/firebaseContext"

function ListForm() {
  
 const firebase = UseFirebaseValue();

  const [bookDetails, setBookDetails] = useState({
       BookName: "",
       ISBN_Number: "",
       Price: "",
  })

  const [coverPic , setCoverPic] = useState("")

  let name, value
  const getData = (e) =>{
    name = e.target.name
    value = e.target.value

   setBookDetails({...bookDetails, [name]:value })

  }

 const handleSubmit = async (eve) =>{
   eve.preventDefault() 

   const {BookName, ISBN_Number, Price} = bookDetails

    let result =  await firebase.addNewListing(BookName, ISBN_Number, Price, coverPic)

    alert("Book created successfully!!")
 }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Book Name" 
         name="BookName" value={bookDetails.name} onChange={getData} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN Number</Form.Label>
        <Form.Control type="text" placeholder="ISBN Number" 
        name="ISBN_Number" value={bookDetails.isbn} onChange={getData} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Book Price" 
        name="Price" value={bookDetails.price} onChange={getData} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file"
         onChange={(e) => setCoverPic(e.target.files[0])}/>
      </Form.Group>


      <Button variant="primary" type="submit">
        Add Book
      </Button>

    </Form>
  );
}

export default ListForm;