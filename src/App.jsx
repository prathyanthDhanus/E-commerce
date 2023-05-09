import { useEffect, useState } from 'react'
import Home from './products/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import {BabyItems} from './products/Productcategory'
import Toys from './products/Toys';
import Cloths from './products/Cloths';
import Food from './products/Food';
import Clogs from './products/Clogs';
import Header from './products/Header';
import View from './products/View';
import { MyContext } from './Context-Api/Context';
import Mycart from './products/Mycart';
import Signup from './products/Signup';
import Login from './products/Login';
import Sidebar from './Admin control/Sidebar';
import Userdetails from './Admin control/Userdetails';
import Productdetails from './Admin control/Productdetails';
import Addproduct from './Admin control/Addproduct';
import Edit from './Admin control/Edit';
import Footer from './products/Footer';
import { Productdata } from "./products/Productdata";


function App() {

  const [input, setInput] = useState([])
   const [signup,setSignup]=useState([])
   const [add,setAdd] = useState( Productdata )
    const [edit,setEdit] = useState([])


  const state = {
    input,
    setInput,
    signup,setSignup,
    add,setAdd,
    edit,setEdit
  } 

  const loc=useLocation()
  const [change,setChange]=useState(false)

  useEffect(()=>{
    if(loc.pathname.includes('/sidebar')){
      setChange(true)
    }else{
      setChange(false)
    }
  },[loc])

  return (

  <MyContext.Provider value={state} >
   {change ? null : <Header/>} 
 
  <Routes>
 
  <Route path='/' element={<Home/>}/>
  <Route path='/toys' element ={<Toys/>}/>
  <Route path='/cloths' element ={<Cloths/>}/>
  <Route path='/food' element ={<Food/>}/>
  <Route path='/clogs' element ={<Clogs/>}/>
  <Route path='/View/:id' element ={<View/>}/>
  <Route path='/mycart' element ={<Mycart/>}/>
  <Route path='/Signup' element ={<Signup/>}/>
  <Route path='/Login' element ={<Login/>}/>

  <Route path='/sidebar' element ={<Sidebar/>}/>
   
  <Route element={<Sidebar/>}>
  <Route path='/sidebar/Userdetails' element ={<Userdetails/>}/>
  <Route path='/sidebar/Productdetails' element ={<Productdetails/>}/>
  <Route path='/sidebar/Addproduct' element ={<Addproduct/>}/>
  <Route path='/sidebar/Edit' element ={<Edit/>}/>
  </Route>

  </Routes>
  {change ? null : <Footer/>} 
  </MyContext.Provider>
  )
}
export default App
