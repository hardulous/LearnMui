import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {

  return (

    <>
    
      <Box width="300px">

        <Card>

            <CardActionArea onClick={()=>{console.log("Clicked on Card")}}>
               <CardMedia component="img" height="200px"    image='https://nickroberts.ninja/wp-content/uploads/2017/07/react.jpg' alt="react.png"/>
               <CardContent>
                   <Typography gutterBottom variant="h5"    component="div">React</Typography>
                   <Typography gutterBottom variant="body2"    color="text.secondary">Lorem ipsum dolor sit    amet, consectetur adipisicing elit. Ad laborum    repellat inventore eaque odit quibusdam officia    suscipit aliquid nesciunt deleniti nulla, nihil,    mollitia, facere provident amet hic cum ex    voluptatum.</Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>

      </Box>
    
    </>

  )

}

export default MuiCard

// CARD

// here CARD component also have some shadow and elevation similar to paper component , The whole Card component consist of parent Card , for image CardMedia for content we have CardContent and for button and action we have CardActions components

// 1. variant => just like in paper card also take variant with value as outlined to remove the elevation 

// and in order to provide ripple effect when user clicked on card just wrap the area of card componet in CardActionArea component 