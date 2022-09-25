import { Check } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Collapse } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const MuiAlert = () => {
 
  const [openAlert, setopenAlert] = useState(true)  

  return (

    <>
    
      <Stack spacing={2}>

        <Alert severity='error'>Alert1</Alert>
        <Alert severity='success'>Alert2</Alert>
        <Alert severity='info'>Alert3</Alert>
        <Alert severity='warning'>Alert4</Alert>

        <Alert severity='error' variant='outlined'>
            <AlertTitle>Header of alert</AlertTitle>
            Alert1
        </Alert>
        <Alert severity='success' variant='outlined'>
            <AlertTitle>Header of alert</AlertTitle>
            Alert2
        </Alert>
        <Alert severity='info' variant='outlined'>
            <AlertTitle>Header of alert</AlertTitle>
            Alert3
        </Alert>
        <Alert severity='warning' variant='outlined'>
            <AlertTitle>Header of alert</AlertTitle>
            Alert4
        </Alert>

        <Alert severity='error' variant='filled'>Alert1</Alert>
        <Alert severity='success' variant='filled'>Alert2</Alert>
        <Alert severity='info' variant='filled'>Alert3</Alert>
        <Alert 
        severity='warning' 
        variant='filled'
        icon={<Check/>}  // icon is changed 
        >Alert4</Alert>

        {/* COLLASABLE ALERT */}
        <Collapse in={openAlert}>

          <Alert severity='error' variant='filled' onClose={()=>{setopenAlert(false)}}>Alert1</Alert>

        </Collapse>

        <Alert 
        severity='success' 
        variant='filled'
        action={
            <Button size="small" color="inherit">Undo</Button>
        }
        >Alert2</Alert>

      </Stack>   

    </>

  )

}

export default MuiAlert

// ALERT

// This componet used Alert wrapper component with prop severity which used to define type and color of alert 

// to change type of alert we use variant prop

// to add title in alert component we use AlertTitle component as child of Alert component 

// to change default icon of alert based on severity , we pass icon prop to Alert component 

// we can add icon at the end of Alert by passing onClose handler method an close icon will appear and if we pass any button on action prop of Alert component then that button will appear at Alert 

// in order to close Alert on click we have to use Collapse component 