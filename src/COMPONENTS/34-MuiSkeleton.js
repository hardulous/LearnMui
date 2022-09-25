import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'
import img from "../IMAGES/Testimonial/Sanjay.jpg"
import { useEffect } from 'react'
import { useState } from 'react'

const MuiSkeleton = () => {
  
  // implementing youtube homepage card with loading skeleton and with actual content 
  const [Loading, setLoading] = useState(true)  

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (

    <>

      {/* <Stack spacing={2} width="300px">

        <Skeleton variant="text"/>
        <Skeleton variant="circular" width={40} height={40}/>
        <Skeleton variant="rectangular" width={300} height={200}/>

        <Skeleton variant="text" animation="wave"/>
        <Skeleton variant="circular" width={40} height={40} animation="wave"/>
        <Skeleton variant="rectangular" width={300} height={200} animation="wave"/>

        <Skeleton variant="text" animation={false}/>

      </Stack>    */}

      {/* Implementing youtube skeleton */}
      <Box sx={{width:"250px"}}>

        {
            Loading ? <Skeleton variant="rectangular" width={250} height={110} animation="wave"/> 
            :
            <img src={img} widht="250px" height="110px"/> 

        }

        <Stack direction="row" spacing={1} sx={{width:"100%",marginTop:"12px"}}>
           
           {
              Loading ? <Skeleton variant="circular" width={40} height={40} animation="wave"/> 
              :
              <Avatar>AB</Avatar>
           }

        </Stack>

        <Stack sx={{width:"80%"}}>
            
            {
               Loading ? <>
                   <Typography variant='body1'>
                     <Skeleton width="100%" animation="wave"/>
                   </Typography>
                   <Typography variant='body2'>
                     <Skeleton width="100%" animation="wave"/>
                   </Typography>
               </>
               :
               <>
                  <Typography variant="body1">React Mui Tutorial</Typography>
               </>
            }

        </Stack>

      </Box>

    </>

  )

}

export default MuiSkeleton

// SKELETON

// it takes singlw Skeleton component with default veriant as text , we can pass height and width prop as well 

// we can also pass animation prop which is default pulse , and for no animation just pass false

// if skeleton component is wrapped around other component like typography then that skeleton automatically take width and height of wrapper component 