import { Box , FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {

  const [check, setcheck] = useState(false)  

  console.log(check);

  return (

    <>
    
      <Box>
        <FormControlLabel label="Dark Mode" control={<Switch size='medium' color="success" checked={check}/>} onChange={(e)=>{setcheck(e.target.checked)}}/>
      </Box>

    </>

  )
}

export default MuiSwitch

// SWITCH

// 