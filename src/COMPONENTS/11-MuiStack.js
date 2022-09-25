import { Stack,Box,Divider } from '@mui/material'
import React from 'react'

const MuiStack = () => {

  return (

    <>
    
      <Stack sx={{
        border:"1px solid red",
        width:"50%",
        marginBottom:"2rem"
      }} spacing={2} direction="row-reverse">
 
        <Box sx={{
            backgroundColor:"red",
            width:"40%"
        }}>BOX1</Box>
        <Box sx={{
            backgroundColor:"blue",
            width:"40%"
        }}>BOX2</Box>         

      </Stack>   

      <Stack sx={{
        border:"1px solid red",
        width:"50%",
        height:"200px"
      }} 
      spacing={2}
      direction="row" 
      divider={<Divider orientation='vertical' flexItem/>}>
 
        <Box sx={{
            backgroundColor:"red",
            width:"25%"
        }}>BOX1</Box>
        <Box sx={{
            backgroundColor:"blue",
            width:"25%"
        }}>BOX2</Box>         
        <Box sx={{
            backgroundColor:"green",
            width:"25%"
        }}>BOX2</Box>         

      </Stack>   
    
    </>

  )

}

export default MuiStack

// STACK

// similar to div with flexbox properties with default direction is column

// 1. sx => we can pass sx prop to give inline css 

// 2. direction => by passing row the flex direction will be changed , other value is row-reverse , column-reverse etc...

// 3. spacing => similar to giving gap in flexbox and value is multipled by 8 

// 4. Divider => this prop will insert the specified component between the each child of Stack

// HERE similar to BOX , STACK also have access to MUI system property to use as prop 