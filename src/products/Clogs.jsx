import React, { useContext } from 'react'
import { Card,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context-Api/Context'

function Clogs() {

  const addedData = useContext(MyContext)
  const { add,setAdd,setEdit} = addedData


    const clogsData=add.filter((item)=>{
        return item.title==='Clog'
    })

    const navigate = useNavigate()

  return (
    <div>
    {clogsData.map((clog) => (
        <div className='d-inline-flex p-3'>
          <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img className='pic p-3'
              style={{ height: '18rem' }}
              variant="top" src={clog.image} />
            <Card.Body>
              <Card.Title>{clog.title}</Card.Title>
              <Card.Text>
                {clog.desc}
              </Card.Text>
              <Button  onClick={()=> navigate(`/View/${clog.id}`)} variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Clogs