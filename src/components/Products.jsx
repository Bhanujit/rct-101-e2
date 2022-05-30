import React, {useState,useEffect} from "react";
import styled from 'styled-components'
import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Pagination from "./Pagination";
export const Products = ({data}) => {
  // TODO: Remove below const and instead import them from chakra
  
  const [pagination,setPagination] = useState({start:0,end:3})
  const[showPerPage,setShowPerPage] = useState(3)

  const Card = styled.div` 
    height: 300px;
    width: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding:10px;
    text-align: center;
  `
  function onShowChange(val){
    setShowPerPage(val)
    console.log(showPerPage)
  }
  function onPagination(start,end){
    setPagination({start:start, end:end})
  }
  return (
    <div style={{marginTop:"50px"}}>
   <Container maxW='1000px' color='black'>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
     {data.slice(pagination.start,pagination.end).map((e)=>{
  return (<GridItem className="Container" key={e.id} >
         <Card>
         <img src={e.imageSrc} alt=""/>
          <h1> Title: {e.title}</h1>
          <p>For: {e.gender}</p>
          <p>Category: {e.category}</p>
          <p>Price: {e.price}</p>
         </Card>
         </GridItem>)
      })}
   </Grid>
   
   </Container>
   <Pagination showPerPage = {showPerPage} onChange={onPagination} onShowChange={onShowChange} />
   </div>
  );
};


