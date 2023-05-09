import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUser, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context-Api/Context';


const Header = () => {
 
  const inputRef=useRef(null)
  const navigate=useNavigate()
  const searching=useContext(MyContext)
  const {add}=searching
 
 const handleSearch=()=>{
   const search = inputRef.current.srh.value.toLowerCase()
   const productName = add.map((item) => item.title.toLowerCase())
   
   if (productName.includes(search) ){
    const matching=add.find((item)=>item.title.toLowerCase() === search)
    navigate(`/${matching.title}`)
    
   }else{

    alert('item not found')
   }
   
 }


  return (
    <div >
    
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
         <FaUserEdit style={{position:"relative",top:'14px'}} onClick={()=>navigate('/sidebar')}/>
        </Nav>
        <Form className="d-flex" ref={inputRef}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name='srh'
          />
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          <Nav.Link as={Link} to="/mycart"><FiShoppingCart className='ms-4' size={30} /></Nav.Link>
          
         <Nav.Link as={Link} to="/Login"><FaUser className='ms-4' size={30}/></Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    
    </div>
  )
}

export default Header
