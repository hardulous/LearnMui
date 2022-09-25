import { Mail } from '@mui/icons-material'
import { Badge, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiBadge = () => {

  return (

    <>
    
      <Stack spacing={2} direction="row">

         <Badge badgeContent={5} color="success">
           <Mail/>
         </Badge>

         <Badge badgeContent={5} color="success">
           <Typography variant="h4">BADGE</Typography>
         </Badge>

         <Badge badgeContent={0} showZero color="success">
           <Typography variant="h4">0</Typography>
         </Badge>

         <Badge badgeContent={200} max={200} color="success">
           <Mail/>
         </Badge>

         <Badge badgeContent={5} color="secondary" variant='dot'>
           <Typography variant="overline">BADGE</Typography>
         </Badge>

         <Badge color="success" invisible={true}>
           <Mail/>
         </Badge>

      </Stack>

    </>

  )

}

export default MuiBadge

// BADGE

// This component have Badge wrapper component with badgeContent prop and it will put in this content on top right of its child component and color prop to change the color 

// if badgeContent prop of Badge component is undefined and 0 then badge itself is not displayed , we can override this behaviour by passing showZero prop

// if badgeContent is > 99 then it will display 99+ because default maxValue is 99 we can change it by max prop

// we can pass variant prop as well with value dot which give us hint that something has changed without any value 

// to hide the badge pass invisible prop as true to Badge