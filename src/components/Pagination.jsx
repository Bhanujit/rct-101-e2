import React, {useState,useEffect} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const Pagination = ({showPerPage, onChange,onShowChange}) => {
  // TODO: Remove below const and instead import them from chakra
  
  const [counter,setCounter] = useState(1)
  useEffect(() => {
    const value = showPerPage * counter
    onChange(value - showPerPage, value)
  }, [counter])
  
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>{setCounter(counter-1)}}>Prev</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>{onShowChange(e.target.value)}}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-last-button" onClick={()=>{setCounter(counter+1)}}>Next</Button>
    </ButtonGroup>
  );
};

export default Pagination;
