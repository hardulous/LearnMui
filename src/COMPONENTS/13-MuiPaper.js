import { Paper } from '@mui/material'
import React from 'react'

const MuiPaper = () => {

  return (

    <>
    
      <Paper sx={{width:"200px",height:"200px",marginBottom:"1rem"}} elevation={5}></Paper>

      <Paper sx={{width:"200px",height:"200px"}} variant="outlined"></Paper>
    
    </>

  )

}

export default MuiPaper

// PAPER

// used to give a wrapper paper texture or some shadow with elevation

// to mention css pass sx prop 

// 1. elevation => used to control shadow and elevation of paper component

// 2. variant => to get different type of paper with different elevation and no elevation 