import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyContext } from '../Context-Api/Context';
import { useNavigate } from 'react-router-dom';

const Edit = () => {

  const inputRef = useRef(null)
  const editedData = useContext(MyContext)
  const { edit, setEdit, add, setAdd} = editedData
  const Nav = useNavigate()

  const submit = () => {
    const id = Math.floor(Math.random() * 100)
    const title = inputRef.current.title.value   // taken value of input  ans assign to titel variable
    const model = inputRef.current.model.value
    const desc = inputRef.current.desc.value
    const price = inputRef.current.price.value
    const image = inputRef.current.image.value

    // console.log(titel);
    setAdd([...add, {title,model,desc,price,image,id}])  // value of titel variable passed to add varibe thrugh setAdd and sperd operater (...add) used for remeber the prev values
    Nav('/sidebar/Productdetails') // 

  }




  return (
    <div>
      {edit.map((item) =>

        <Form key={item.id} ref={inputRef} onSubmit={(e) => { e.preventDefault() }} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control name='title' defaultValue={item.title} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Model</Form.Label>
            <Form.Control name='model' defaultValue={item.model} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Description</Form.Label>
            <Form.Control name='desc' defaultValue={item.desc}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control name='price' defaultValue={item.price} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control name='image' defaultValue={item.image} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submit} key={item.id} >
            Submit
          </Button>
        </Form>
      )}

    </div>
  )
}

export default Edit