import React, { useState } from 'react'
import { Box , TextField , MenuItem } from "@mui/material"

const MuiSelect = () => {

  const [Country, setCountry] = useState("");  
  const [Countries, setCountries] = useState([]); 
  
  console.log(Country,Countries);

  return (

    <>
    
      <Box width="250px">

        {/* Single select */}
        <TextField label="Select Country" select value={Country} onChange={(e)=>{setCountry(e.target.value)}} fullWidth helperText="Select the country" color='warning'>

           <MenuItem value="IN">India</MenuItem>
           <MenuItem value="US">USA</MenuItem>
           <MenuItem value="AUS">Autralia</MenuItem>

        </TextField>

        {/* Multiple Select */}
        <TextField label="Select Countries" select value={Countries} onChange={(e)=>{setCountries(e.target.value)}} fullWidth
        SelectProps={{
            multiple:true
        }}
        >

           <MenuItem value="IN">India</MenuItem>
           <MenuItem value="US">USA</MenuItem>
           <MenuItem value="AUS">Autralia</MenuItem>

        </TextField>

      </Box>  
    
    </>

  )

}

export default MuiSelect

// Here this Box component is just a plain div tag in which we can apply css like width , height etc..

// SELECT 

// there are 2 way to use select component by MUI 1st is by TextField component which is a wrapper around select tag and 2nd is using a seprate component that MUI provide

// by TextField we have to add nested MenuItem component which is similar to option tag of select and to make select drop down just pass select prop to TextField

// pass prop fullWidth so that TextField take 100% width of its parent that is 250px 

// to make the TextField select as multiple select specify the selectProps and make state as an array 

// all props like color , size , disabled etc... can be applied with select as well