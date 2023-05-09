import React, { useContext } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { Productdata } from './Productdata'
import { Card,Button } from 'react-bootstrap'
import { MyContext } from '../Context-Api/Context'
import { FaRupeeSign } from 'react-icons/fa'

const View = () => {

  const myStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    fontSize: '10px'
  };
    const {id} = useParams()

    const mata = useContext(MyContext)
    const {input,setInput,add} = mata

    const data = add.filter((item) => item.id === parseInt(id))
    const navigate = useNavigate()

    const clickHandler = () => {
const [x]=data
        setInput([...input,x])
        navigate('/mycart')

        console.log(input);
    }
    
  return (
    <div>
    {data.map((item) => (
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
              <Card.Text><h3><FaRupeeSign/>
                {item.price}</h3>
              </Card.Text>
              <Button>Buy Now</Button><br/><br/>
              <Button onClick={clickHandler} variant="primary"  style={myStyle} >Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default View