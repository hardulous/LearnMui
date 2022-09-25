import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import React from 'react'

const MuiImageList = () => {

  // Array of images for ImageList
  const Images = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  return (

    <>
    
      <Stack spacing={4}>

        <ImageList sx={{width:"400px",height:"350px"}} cols={2} rowHeight={164}>
            {
              Images.map((img)=>{
                return <ImageListItem key={img.img}>
                   <img src={img.img} alt={img.title} loading='lazy'/> 
                   <ImageListItemBar title={img.title}/> 
                </ImageListItem>
              })
            }
        </ImageList>

        <ImageList variant="woven" sx={{width:"400px",height:"350px"}} cols={3} gap={8}>
            {
              Images.map((img)=>{
                return <ImageListItem key={img.img}>
                   <img src={img.img} alt={img.title} loading='lazy'/>  
                </ImageListItem>
              })
            }
        </ImageList>

       <Box sx={{width:"400px",height:"350px",overflow:'scroll'}}>
         <ImageList variant="masonry" cols={3} gap={8}>
            {
              Images.map((img)=>{
                return <ImageListItem key={img.img}>
                   <img src={img.img} width="248px" height="248px" alt={img.title} loading='lazy'/>  
                </ImageListItem>
              })
            }
          </ImageList>
       </Box>

      </Stack>
    
    </>

  )

}

export default MuiImageList

// IMAGE LIST

// we use ImageList as wrapper component which take sx prop to specify css object , cols prop to mention no of column in grid and rowHeight prop to mention the height of each image

// the child of ImageList component are nested ImageListItem component which take child as native img tag with src 

// we can also change the variant by passing variant prop in ImageList component for variant masnory we pass sx prop to Box component instead of ImageList component 

// we can also add Overlay to each image by ImageListItemBar component which take prop like title , position , subtitle and actionIcon for click event 