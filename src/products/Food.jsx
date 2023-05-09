import React from 'react'
import { Card,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context-Api/Context';


function Food() {
  const addedData = useContext(MyContext)
  const { add,setAdd,setEdit} = addedData
    const foodData=add.filter((item)=>{
        return item.title==='Food'
    })

    const navigate = useNavigate()

  return (
    <div>
    {foodData.map((foods) => (
        <div className='d-inline-flex p-3'>
          <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img className='pic p-3'
              style={{ height: '18rem' }}
              variant="top" src={foods.image} />
            <Card.Body>
              <Card.Title>{foods.title}</Card.Title>
              <Card.Text>
                {foods.desc}
              </Card.Text>
              <Button onClick={()=>navigate(`/View/${foods.id}`)} variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Food