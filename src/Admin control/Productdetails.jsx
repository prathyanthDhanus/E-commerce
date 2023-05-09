import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MyContext } from '../Context-Api/Context';
import { useNavigate } from 'react-router-dom';

function Productdetails() {

   const navigate=useNavigate()
  const addedData = useContext(MyContext)
  const { add,setAdd,setEdit} = addedData

  const handleSubmit=(e)=>{
    const selectID = parseInt(e.target.id)
    const deleteFilter = add.filter((e)=>e.id !== selectID)
    const filteredData = add.filter((e)=>e.id === selectID)
    setEdit(filteredData)
    setAdd(deleteFilter)
    
  navigate('/sidebar/Edit')

  }
 const handleDelete=(e)=>{
  const  selectID = parseInt(e.target.id)
  const deleteFilter =add.filter((e) => e.id !== selectID)
  setAdd(deleteFilter)


 }


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
            <th>Username</th>
            
          </tr>
        </thead>
        {add.map(x => (
          <tbody key={x.id}>
            <tr >
              <td><img src={x.image} style={{ height: '40px' }} /></td>

              <td>{x.title}</td>

              <td>{x.price}</td>

              <td colSpan={2}>{x.model}</td>

              <Button onClick={handleSubmit} id={x.id}>Edit</Button>
              <Button variant='outline-danger' onClick={handleDelete} id={x.id}>Delete</Button>

            </tr>
          </tbody>
        ))}
      </Table>
 
      
    
    </div>
  )
}

export default Productdetails