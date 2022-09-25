import React, { useState } from 'react'
import { Box , FormControl , FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"

const MuiRadio = () => {

  const [Value, setValue] = useState("");

  console.log(Value)

  return (
   
    <>
    
      <Box>
        
        <FormControl error={Value?false:true}>

            <FormLabel id="radio">Years Of Experience</FormLabel>

            <RadioGroup 
            name='Job-Experience-Group'
            aria-labelledby='radio'
            value={Value}
            onChange={(e)=>{setValue(e.target.value)}}
            row
            >
                <FormControlLabel control={<Radio size='medium'/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio color='secondary'/>} label="2-6" value="2-6"/>
                <FormControlLabel control={<Radio/>} label="10+" value="10+"/>
            </RadioGroup>

            <FormHelperText>Please Select One</FormHelperText>

        </FormControl>

      </Box>
    
    </>

  )

}

export default MuiRadio

// RADIO

// to configure RADIO component , add a wrapper FormControl component then add FormLabel which is heading of form and then add RadioGroup component and connect it with FormLabel with id and aria-labelby , now for individual radio button add nested FormControlLabel in RadioGroup , in FormControlLabel add props control which respresent form control component with label and value prop as well

// to align radio button in row add row prop in RadioGroup component and default it is column 

// to change size and color of radio button add size and color prop to Radio component 

// to show error state add error prop to FormControl Component and to show some message add FormHelperText component ibn FormControl