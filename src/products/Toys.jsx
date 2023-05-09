
import React, { useContext } from 'react'
import { Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../Context-Api/Context';
const Toys = () => {
 
  const addedData = useContext(MyContext)
  const { add,setAdd,setEdit} = addedData
const toyData=add.filter((item)=>{
  return item.title==='Toys'
})

const navigate = useNavigate()

  return (
    <div>
    {toyData.map((toy) => (
        <div className='d-inline-flex p-3'>
          <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img className='pic p-3'
              style={{ height: '18rem' }}
              variant="top" src={toy.image} />
            <Card.Body>
              <Card.Title>{toy.title}</Card.Title>
              <Card.Text>
                {toy.desc}
              </Card.Text>
              <Button onClick={()=> navigate(`/View/${toy.id}`)}variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
          </div>
  )
}

export default Toys