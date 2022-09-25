import React from 'react'
import { CatchingPokemon } from "@mui/icons-material"
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
const MuiNavbar = () => {

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
                <Button color="inherit">Log in</Button>
            </Stack>
        </Toolbar>
      </AppBar>
    
    </>

  )

}

export default MuiNavbar

// NAVBAR

// for navbar we use two main component first is AppBar wrapper component which is a flexbox with column direction and inside it we have ToolBar component which is also a flexbox with direction row and left right padding and inside toolbar we can use any other stack and typography component to make navbar

// by default AppBar component have position prop with value fixed

