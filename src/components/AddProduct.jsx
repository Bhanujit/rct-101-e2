import React,{useState,useEffect}from "react"; 
import {Button} from '@chakra-ui/react'
import styled from 'styled-components'

import axios from "axios";
const AddProduct = () => {
  const [forms, setForms] = useState({})
  function handleForm (e) {
    const { name, value} = e.target
    setForms({...forms, [name]:value})
  }
  function handleSubmit(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/products`, {
      ...forms
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const Input = styled.input`
    border: 2px solid black;
  `
  return (
    <>
      <Button my={4} data-cy="add-product-button"></Button>
     
        <form  onSubmit={handleSubmit}>
          Title:{""}
          <Input type="text" name="title" onChange={handleForm}/>
          Price:{""}
          <Input type="text" name ="price" onChange={handleForm} />
          <select name="gender" id="" onChange={handleForm}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select name="categroy" id="" onChange={handleForm}>
            <option value="jeans">Jeans</option>
            <option value="trouser">Trouser</option>
            <option value="t-shirt">T-shirt</option>
            <option value="shirt">shirt</option>

          </select>
          <Input type="submit" />
        </form>
     
    </>
  );
};

export default AddProduct;
