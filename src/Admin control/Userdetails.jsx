import React, { useContext } from 'react'
import { MyContext } from '../Context-Api/Context';
import Table from 'react-bootstrap/Table';

function Userdetails() {
    const user=useContext(MyContext)
const{signup}=user
console.log(signup);

  return (
   
    <div className='ms-4' >
    <Table striped bordered hover variant="dark">
        <thead>
          <tr>
          <th>User Name</th>
            <th>E-Mail</th>
          </tr>
        </thead>
    {signup.map((item)=>(
      <tbody >
      <tr >
        <td style={{ height: '40px' }}>{item.username}</td>
        <td>{item.email}</td>
        </tr>
      </tbody>
  ))}
    
  </Table>
  </div>
    
  )
}

export default Userdetails