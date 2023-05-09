import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { MyContext } from '../Context-Api/Context';
import { useNavigate } from 'react-router-dom';
import { Productdata } from '../products/Productdata';

const Addproduct = () => {

  const navigate=useNavigate()
   const inputRef=useRef()
    const addData=useContext(MyContext)
    const {add,setAdd}=addData

  const handleSubmit=()=>{
  const title=inputRef.current.title.value;
  const model=inputRef.current.model.value;
  const desc=inputRef.current.desc.value;
  const price=inputRef.current.price.value;
  const image=inputRef.current.img.value;
  const id = Math.floor(Math.random()*100)
  setAdd([...add,{title,model,desc,price,image,id}])
  // console.log(add);
navigate('/sidebar/Productdetails')
  
  }

  return (
    <div>
     <Form ref={inputRef} onSubmit={(e)=>{e.preventDefault()}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control name='title'/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Model</Form.Label>
        <Form.Control  name='model'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control name='desc'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control name='price'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control name='img'/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    
    
    </div>
  )
}

export default Addproduct