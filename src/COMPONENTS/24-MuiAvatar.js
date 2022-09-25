import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'
import img1 from "../IMAGES/Testimonial/Sanjay.jpg"
import img2 from "../IMAGES/Testimonial/Mangur.jpg"
const MuiAvatar = () => {

  return (

    <>
    
       <Stack spacing={4}>

         <Stack direction="row" spacing={1}>\
            <Avatar sx={{backgroundColor:"red"}}>AB</Avatar>
            <Avatar sx={{backgroundColor:"blue"}}>AC</Avatar>
         </Stack>

         <Stack direction="row" spacing={1}>
            <Avatar src={img1} alt="testi.jpg"/>
            <Avatar src={img2} alt="testi.jpg"/>
         </Stack>

         <Stack direction="row" spacing={1}>
            <AvatarGroup max={3}>
              <Avatar src={img1} alt="testi.jpg"/>
              <Avatar src={img2} alt="testi.jpg"/>
              <Avatar src={img1} alt="testi.jpg"/>
              <Avatar src={img2} alt="testi.jpg"/>  
            </AvatarGroup>
         </Stack>

         <Stack direction="row" spacing={1}>

            <Avatar 
            src={img1} 
            sx={{width:"100px",height:"100px"}} 
            alt="testi.jpg"/>

            <Avatar 
            src={img2} 
            sx={{width:"100px",height:"100px"}} 
            alt="testi.jpg"/>

         </Stack>

         <Stack direction="row" spacing={1}>

            <Avatar
            variant="square" 
            src={img1} 
            sx={{width:"100px",height:"100px"}} 
            alt="testi.jpg"/>

            <Avatar
            variant="rounded" 
            src={img2} 
            sx={{width:"100px",height:"100px"}} 
            alt="testi.jpg"/>

         </Stack>

       </Stack>

    </>

  )

}

export default MuiAvatar

// AVATAR

// The wrapper Avatar component can take child like string text and prop src to display the image in round border format , we can pass sx props to Avatar component to change its style

// We can group multiple Avatar component by AvatarGroup wrapper component 

// in AvatarGroup we can restrict no of avatar to display by max prop 

// we can change variant of avatar by variant prop to Avatar