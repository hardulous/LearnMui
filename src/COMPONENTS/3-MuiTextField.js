import React, { useState } from 'react'
import { Stack , TextField , InputAdornment } from '@mui/material'
const MuiTextField = () => {

  const [Value, setValue] = useState("");

  return (

    <>
      
      <Stack spacing={4}>
        
        <Stack direction="row" spacing={2}>
           <TextField label="name" required/>
           <TextField label="name" variant='filled'/>
           <TextField label="name" variant='standard'/>
        </Stack>

        <Stack direction="row" spacing={2}>
           <TextField label="small Secondary" size='small' color="secondary"/>
           <TextField label="large warning" size='large' color="warning" variant="filled" helperText="Do not share your password with anyone"/>
        </Stack>

        <Stack direction="row" spacing={2}>
           <TextField label="Name"size='small' color="secondary" type="text"/>

           <TextField 
           label="Password" 
           size='small' 
           color="secondary" 
           value={Value}
           onChange={(e)=>{setValue(e.target.value)}}
           error={!Value} // show error if value is null 
           helperText={Value?'We do not share your password with anyone':'Required'}
           type="password"/>

           <TextField 
           label="email" 
           size='small' 
           color="secondary" 
           type="email" 
           defaultValue="amanbisht123abc@gmail.com" 
           InputProps={{
            readOnly:true
           }}/>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField 
          label="Amount"
          InputProps={{
            startAdornment:<InputAdornment position='start'>Rs</InputAdornment>
          }}
          ></TextField>
          <TextField 
          label="Weight"
          InputProps={{
            endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
          }}
          ></TextField>
        </Stack>

      </Stack>
    
    </>

  )
}

export default MuiTextField

// ##### TEXTFIELD

// PROPS:

// 1. label => it act as a placeholder but with floating property 

// 2. variant => similar to variant in button and typography and default value is outlined and other is filled and standard

// 3. size and color props => similar to typography and button one 

// 4. required and disabled => required will add required astrisk in input and make it required to submit and disabled make it unable for user to interact with 

// 5. helperText => to add a helper text string below input

// 6. type => similar to input type attribute of input tag 

// 7. readOnly => to make user unable to edit the text but make it readonly

// 8. value and onChange => to make TextField as controlled component we can pass value and onChange method as props as well

// we can also add prefix or suffix that is some text before and after the actual text by user in input by InputAdornment Component , Here this TextField component is basically a wrapper around the input component and we use InputProps attribute to target the underlying input component and these suffix and prefix text can be an icon as well

// to show some error state we add error prop to TextField component