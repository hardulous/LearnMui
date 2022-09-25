import { GifBox, Home, RoomService } from '@mui/icons-material'
import { Link, Stack } from '@mui/material'
import React from 'react'

const MuiLink = () => {

  return (

    <>
    
      <Stack spacing={2} direction="row" m={4}>
          <Link href="#">Link1</Link>
          <Link href="#" color="secondary">Link2</Link>
          <Link href="#" color="success" underline='hover'>Link3</Link>
          <Link href="#" color="success" underline='none'>Link4</Link>
          <Link href="#" variant="h4" color="success" underline='none' onClick={()=>{console.log("Clicked")}}>Link5</Link>
          
          {/* Links with icons  */}
          <Link href="#" sx={{display:'flex',alignItems:'center'}}><Home/>Home</Link>
          
          <Link href="#" sx={{display:'flex',alignItems:'center'}}><GifBox/> Product</Link>
    
          <Link href="#" sx={{display:'flex',alignItems:'center'}}><RoomService/> Service</Link>


      </Stack>

    </>

  )
  
}

export default MuiLink

// LINK

// this component use Link component with prop as href and default is of primary color with underlined text

// there are props like color , underline which tell when to underline link , and variant props which by default value inherit means take variant of parent 

// it also has a onClick prop to handle click event