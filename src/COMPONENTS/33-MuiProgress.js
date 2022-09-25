import { CircularProgress, LinearProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const MuiProgress = () => {

  return (

    <>
    
      <Stack spacing={2}>

        <CircularProgress/> 
        <CircularProgress color="success"/> 
        <CircularProgress color="secondary" variant='determinate' value={80}/> 
        
        <LinearProgress/>
        <LinearProgress color='success'/>
        <LinearProgress color="secondary" variant='determinate' value={50}/>

      </Stack>   

    </>

  )

}

export default MuiProgress

// PROGRESS

// Progress component are of 2 type in the form of linear and circular progress and each of them can be either indeterminate and determinate ( means with and without value )

// for variant determinate prop we have to pass value prop as well 