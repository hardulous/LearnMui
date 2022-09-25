import { Menu } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiDrawer = () => {

  const [isDrawerOpen, setisDrawerOpen] = useState(false);  

  return (

    <>
      
      <IconButton size="large" edge="start" onClick={()=>{
        setisDrawerOpen(true)
      }}>
        <Menu/>
      </IconButton>

      <Drawer 
      anchor='left' 
      open={isDrawerOpen} 
      onClose={()=>{setisDrawerOpen(false)}}
      >

        <Box p={2} width="250px" textAlign="center" role="presentation">
           <Typography variant="h6">SIDE PANEL</Typography>
        </Box>

      </Drawer>
    
    </>

  )

}

export default MuiDrawer

// DRAWER

// by default the drawer component is hidden and has a prop open which when true will show the drawer component with its child and has onClose method prop to close the drawer on clicking outside , it also has a prop anchor which take value like left or right to show direction of drawer opening

// we can also pass variant prop to SpeedDial Component to make it either permanent and temporary 