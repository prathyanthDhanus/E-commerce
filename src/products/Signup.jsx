import React, { useContext, useRef} from 'react'
import { Button } from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import "../products/style.css"
import { MyContext } from '../Context-Api/Context';
import Form from 'react-bootstrap/Form';


function Signup() {
  const navigate=useNavigate()
const add=useContext(MyContext)
const{signup,setSignup}=add
const inputRef=useRef()
const handleSubmit=()=>{
const username=inputRef.current.user.value;
const email=inputRef.current.email.value;
const password=inputRef.current.password.value;
const pwd=inputRef.current.confirmpwd;
setSignup([...signup,{username,email,password,pwd}])
// console.log(signup);
navigate('/Login')
}

  return (
    <div  className="S-maindiv">
    
    <Form ref={inputRef} onSubmit={(e)=>{e.preventDefault()}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control name='user' placeholder="Enter username" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>E-mail</Form.Label>
      <Form.Control name='email'  placeholder="E-mail" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password'  placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control name='confirmpwd' placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={handleSubmit} >
      Submit
    </Button><br/>
    <label> Have already an account</label><Link to="/Login">Login</Link>
  </Form>


   
   
    </div>
   
  )
}

export default Signup