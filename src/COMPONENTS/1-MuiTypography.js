import React from 'react'
// importing typography component
import { Typography } from "@mui/material"

const MuiTypography = () => 
{
  return (

   <>
   
    <Typography variant="h1" align='center' gutterBottom>h1 heading</Typography>
    <Typography variant="h2" align='right'>h2 heading</Typography>
    <Typography variant="h3" align='justify'>h3 heading</Typography>
    <Typography variant="h4" component="h1">h4 heading</Typography>
    <Typography variant="h5" gutterBottom>h5 heading</Typography>
    <Typography variant="h6">h6 heading</Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis numquam recusandae atque illum qui amet natus non porro praesentium, quisquam a laborum sequi omnis quasi? Ipsa dolorum omnis ab.</Typography>
    <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ea laudantium. Fugit ducimus, non, deleniti fugiat accusantium amet delectus nulla ab itaque accusamus enim sint aut, quaerat impedit inventore pariatur!</Typography>
    <Typography variant="subtitle1">subtitle1 heading</Typography>
    <Typography variant="overline">overline heading</Typography>

    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ea laudantium. Fugit ducimus, non, deleniti fugiat accusantium amet delectus nulla ab itaque accusamus enim sint aut, quaerat impedit inventore pariatur!</Typography>

   </>

  )
}

export default MuiTypography


// there are 13 different variant of typography component , when we import and use the mui component all component internally are ussing html semantic element 

// PROPS : 

// 1. variant => it is used to specify the variant of text , variant with subtitle 1 and 2 are h6 with lesser font-size and weight and body 1 and 2 are paragraph tag without margin and overline is span tag 

// 2. align => it is similar to giving text-align property 

// 3. component => it is used to change the semantic element provided by typography component based on variant ex, we have h4 tag with default css by MUI but if we want this h4 tag to be rendered as h1 but css must be of h4 variant 

// 4. gutterBottom => a boolean which is used to provide bottom margin and value of margin is depend on variant , greater the variant greater will be the margin 

// here every variant have default css applied by MUI , in order to see them go to custumization and there go to default theme 