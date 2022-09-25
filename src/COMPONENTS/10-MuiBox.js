import { Box } from '@mui/material'
import React from 'react'

const MuiBox = () => {

  return (

    <>

      <Box>DIV</Box>
      <Box component="article">ARTICLE</Box>
      <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        width:'300px',
        height:'100px',
        padding:'1rem',
        transition:"all 0.5s ease",
        '&:hover':{
            backgroundColor:'primary.light',
        }
      }}>CUSTOM CSS</Box>
      
      {/* Here accessing system properties */}
      <Box display="flex" height="100px" width="300px" bgcolor="success.light" p={2} justifyContent="center" alignItems="center">
        SYSTEM PROPERTIES
      </Box>

    </>

  )
}

export default MuiBox

// BOX

// used as a div wrapper tag and not only div but we can change it to any other semantic tag like section , article , span etc by passing component prop

// 1. sx => as default box component have no style but in order to add some style pass the sx prop which take style object which have access to theme

// NOTE: only MUI component have access to THEME object but not to normal html tag 

// Here Box component also have access MUI system properties means we can use lot of css property in box component by passing prop of them instead of using sx prop

// To know MUI system properties go to Sytles utilites section and there go to Properties section 