import React, { useContext } from 'react'
import { MyContext } from '../Context-Api/Context'
import { Image } from 'react-bootstrap'
import { Button } from "react-bootstrap";

function Mycart() {

const crt = useContext(MyContext)
const {input,setInput} = crt
const handleSubmit=(e)=>{
const removeId=parseInt(e.target.id)
const data=input.filter((x) =>  x.id != removeId )

setInput(data)

}

  return (
    <div>
   <h1 style={{textAlign:'center', paddingTop:'1rem'}}> Mycart</h1>
   <div>
   {input.map((item) => (
    
    <div >
    <h2 style={{color:'firebrick'}}>{item.title}</h2>
    <Image 
    className='img-fluid' style={{width:'80px', height:'100px'}}
    src={item.image}></Image><br/>
    <Button>Buy</Button>
    <Button onClick={handleSubmit} id={item.id} className='ms-3'>Remove</Button>
    
    </div>
    
  ))}
   </div>
    </div> 
  )
}

export default Mycart