import React from 'react'
import { Card,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context-Api/Context';
const Cloths = () => {

  const addedData = useContext(MyContext)
  const { add,setAdd,setEdit} = addedData
    const clothData=add.filter((item)=>{
        return item.title==='Cloths'
    })

    const navigate = useNavigate()

  return (
    <div>
    {clothData.map((cloth) => (
        <div className='d-inline-flex p-3'>
          <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img className='pic p-3'
              style={{ height: '18rem' }}
              variant="top" src={cloth.image} />
            <Card.Body>
              <Card.Title>{cloth.title}</Card.Title>
              <Card.Text>
                {cloth.desc}
              </Card.Text>
              <Button onClick={()=> navigate(`/View/${cloth.id}`)} variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Cloths