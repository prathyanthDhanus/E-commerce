import React, { useState } from 'react'

import { Card, Button } from 'react-bootstrap'
import { BabyItems } from './Productcategory'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const [items, setitems] = useState(BabyItems)
  return (
    <div>
      
      <div>
        <h1>Baby Essential Fashion & Nursery</h1>
      </div>
      {items.map((item) => (
        <div className='d-inline-flex p-3'>
          <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img className='pic p-3'
              style={{ height: '18rem' }}
              variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.desc}
              </Card.Text>
              <Button onClick={()=>navigate(`/${item.title}`)} variant="primary">View products</Button>
            </Card.Body>
          </Card>
        </div>
      ))}


    </div>
  )
}

export default Home