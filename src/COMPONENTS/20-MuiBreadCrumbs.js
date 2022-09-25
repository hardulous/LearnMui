import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Typography,Link } from '@mui/material'
import React from 'react'

const MuiBreadCrumbs = () => {
    
  return (

    <>
    
      <Box m={2}>

        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalog</Link>
            <Link underline="hover" href="#">Service</Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" separator="-">
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalog</Link>
            <Link underline="hover" href="#">Service</Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small"/>}>
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalog</Link>
            <Link underline="hover" href="#">Service</Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs 
        aria-label="breadcrumb" 
        separator={<NavigateNext fontSize="small"/>}
        maxItems={2}
        itemsAfterCollapse={2}
        >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalog</Link>
            <Link underline="hover" href="#">Service</Link>
            <Typography color="text.primary">Shoes</Typography>

        </Breadcrumbs>

      </Box>

    </>

  )

}

export default MuiBreadCrumbs

// BreadCrumbs

// all Link and child component of Breadcrumb component are by default seprated by forward slash icon , to change the seprator we use seprator prop , breadcrumb component will have display as flex 

// by default breadcumb component show 8 item , we can change it by maxItem prop , to change no of item before and after the collapsed using itemAfterCollapse and itemBeforeCollapse as default both value is 1