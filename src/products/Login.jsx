import React, { useContext, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "../products/style.css"
import Form from 'react-bootstrap/Form';
import { MyContext } from '../Context-Api/Context';

function Login() {
  const inputRef=useRef(null)
const navigate=useNavigate()
 const logi=useContext(MyContext)
    const{signup}=logi
    const handleSubmit=()=>{
    const UName=inputRef.current.user.value;
      const PWD=inputRef.current.password.value;
    
    const details=signup.filter((item)=>
       item.username===UName&&item.password===PWD
)
      if(details.length>0){
        navigate('/')
      }else{
        alert('wrong user')
      }
    }





  return (
    <div className='S-maindiv'>
    <Form ref={inputRef} >
   <h1>Login</h1>
   <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control name='user' placeholder="Enter username" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' placeholder="Enter username" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Button onClick={handleSubmit}>Submit</Button><br/>
    <label>Create a new account</label><Link to="/Signup">Signup</Link>
   </Form>
  
    </div>
    
    
    
  )
}

export default Login