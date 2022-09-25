import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Responsiveness = () => {

  return (

    <>
    
      <Box sx={{
        height:"300px",
        width:{
          xs:100,  // viewport > 0px
          sm:200,  // viewport >= 600px
          md:300,  // viewport >= 900px
          lg:400,  // viewport >= 1200px
          xl:500   // viewport >= 1536px 
        },
        bgcolor:"primary.main"
      }}>

      </Box>

      <Stack direction={{
        xs:'column',
        md:'row'
      }}
      spacing={{
        xs:1,
        sm:2,
        md:4
      }}
      >
        <Typography>1</Typography>
        <Typography>2</Typography>
        <Typography>3</Typography>
        <Typography>4</Typography>
        <Typography>5</Typography>
      </Stack>

    </>

  )

}

export default Responsiveness

// RESPONSIVENESS IN MATERIAL UI

// in material ui to provide responsive value of css property we use breakpoint shorthand syntax 

// Mui provide 5 breakpoints which is , xs , sm , md , lg and xl