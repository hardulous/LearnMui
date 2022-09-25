import React, { useState } from 'react'
import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material"
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'

const MuiMenu = () => {

  const [anchorEl, setanchorEl] = useState(null);  
  const open = Boolean(anchorEl); // if element exist then true else null 

  return (

    <>
    
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge="start" color="inherit">
                <CatchingPokemon/>
            </IconButton>
            <Typography variant='h6' sx={{flexGrow:'1'}} component="div">POKEMONAPP</Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Feature</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
               
               
                 {/* Button to pop up Menu component */}
                <Button color="inherit" id="resources-button" onClick={(e)=>{
                    console.log(e.currentTarget) // refer to button
                    setanchorEl(e.currentTarget)
                }}
                endIcon={<KeyboardArrowDown/>}
                >Resources</Button>

                <Button color="inherit">Log in</Button>

            </Stack>

            <Menu 
            id="resources-menu"
            aria-controls={open?'resources-menu':undefined}
            aria-haspopup="true"   // passing aria-label for accessibility reason 
            aria-expanded={open?'true':undefined}
            anchorEl={anchorEl} 
            open={open} 
            onClose={()=>{setanchorEl(null)}}
            MenuListProps={{
                'aria-labelledby':'resources-button'
            }}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'right'
            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
            >
                <MenuItem onClick={()=>{setanchorEl(null)}}>Blog</MenuItem>
                <MenuItem onClick={()=>{setanchorEl(null)}}>Podcast</MenuItem>

            </Menu>

        </Toolbar>
    </AppBar>
    

    </>

  )

}

export default MuiMenu

// MENU

// this component use Menu component as wrapper and MenuItem as child element , Menu component is default hidden in order to open the Menu component take help of other component like Button by changing state on click of this button and making it equal to e.currentTarget , now have to pass this changed state as anchorEl prop value of Menu component and also other prop open must be true as well , in order to close this Menu component pass onClose handler function which will set state to null and open prop as false

// We can also change position of Menu pop up below button by passing anchorOrigin and transformOrigin prop to Menu component 

// To know more about anchorOrigin and transformOrigin go to component util section and there go to Popover component 