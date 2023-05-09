import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Outlet, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/sidebar/Userdetails')
  }

  const Submit = () => {
    navigate('/sidebar/Productdetails')
  }

  const handleOk = () => {
    navigate('/sidebar/Addproduct')
  }



  return (
    <div className='d-flex' style={{position:"relative",top:'20px' }}>
    <div style={{ width: '200px'}} >
      <h1>Admin</h1>
      <ListGroup>
      <Button onClick={()=>navigate('/')}>Back to Home</Button>
        <ListGroupItem onClick={handleSubmit}>User Details</ListGroupItem>
        <ListGroupItem onClick={Submit}>Product Details</ListGroupItem>
        <ListGroupItem onClick={handleOk}>Add Product </ListGroupItem>
        <ListGroupItem>Revenue</ListGroupItem>

      </ListGroup>
      </div>
      <Outlet />
    </div>
  )
}

export default Sidebar