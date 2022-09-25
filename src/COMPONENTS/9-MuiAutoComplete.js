import { Stack , Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiAutoComplete = () => {

  const Skills = ['HTML','CSS','JAVASCRIPT','TYPESCRIPT','REACT'];  
  
  // Here autoComplete component can accept array of string and array of object which contain label key   
  const SkillsObj = Skills.map((s,i)=>{
    return {
        id:i,
        label:s
    }
  })

  const [Value, setValue] = useState(null);
  const [Value2, setValue2] = useState(null);

  console.log(Value,Value2);

  return (

    <>
    
      <Stack spacing={2} width="250px">

         <Autocomplete 
         options={Skills} 
         renderInput={(params)=>(
            <TextField {...params} label="Skills"/>
         )}
         value={Value}
         onChange={(e,newValue)=>{setValue(newValue)}}
         freeSolo
         />

         <Autocomplete 
         options={SkillsObj} 
         renderInput={(params)=>(
            <TextField {...params} label="Skills"/>
         )}
         value={Value2}
         onChange={(e,newValue)=>{setValue2(newValue)}}
         />   

      </Stack>

    </>

  )

}

export default MuiAutoComplete

// AUTOCOMPLETE

// this component take 2 mandatory prop one is optios which is array of string or suggested text and other is renderInput which is an arrow function which have access to some parameter and return any input component with those parameter spread on it 

// to make it controlled component pass value and onChange prop to autoComplete component and note that onChange handler method have access to both event object and newValue coming from array of suggested string so on selecing any suggested the state variable get changed but in order to allow free text to be accepted pass another prop freeSolo , now on enter of free text the state will get changed 