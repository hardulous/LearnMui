import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiStyles = () => {

  return (

    <>
    
      <Stack spacing={2}>

        <Stack spacing={4} direction="row">
          <Button variant="contained">Submit</Button>
          <Typography>Original h1</Typography>
        </Stack>

        <Stack 
        spacing={4} 
        direction="row"
        sx = {{
            '& .MuiButtonBase-root':{
                padding:0,
                bgcolor:"red"
            },
            '& .MuiTypography-root':{
                bgcolor:"blue"
            },
            '& h4':{
                fontFamily:"monospace"
            },
        }}
        >
          <Button variant="contained" sx={{
            '&:hover':{
                bgcolor:"blue"
            }
          }}>Sx Submit</Button>
          <Typography variant="h4">Sx h1</Typography>
        </Stack>

        <Stack spacing={4} direction="row">
          <Button variant="contained">Hook Submit</Button>
          <Typography>Hook h1</Typography>
        </Stack>

      </Stack>

    </>

  )

}

export default MuiStyles

// STYLING SPECIFIC COMPONENT AND CHANGING THEIR STYLES

// in mui we have 2 way to change style of component 1 is sx prop and other is using makeStyle hook provided by mui 

// every component in mui have sx prop available in which we can pass style object , and it can be used to override the classes used by mui

// here in order to change the nested class style by sx prop first write selector in string '' starting with & which denote the current parent element and after this write className of the child element provided by MUI by looking at dev tool , for example i am changing style of Button and typography component present in 2nd Stack component.

// TO LEARN MORE ABOUT STYLING IN MUI GO TO https://mui.com/system/styles/basics/