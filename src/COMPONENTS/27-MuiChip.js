import { Face } from '@mui/icons-material'
import { Avatar, Chip, Stack } from '@mui/material'
import React, { useState } from 'react'

const MuiChip = () => {

  const [Chips, setChips] = useState(["C1","C2","C3"])  
  
  // state and delete handler to handle delete chip from UI 
  const handleDel = (chip)=>{
    
    setChips(Chips.filter((c)=>{
        return c!==chip
    }))

  }

  return (

    <>
    
      <Stack direction="row" spacing={1}>
        
         <Chip label="Chip1"/>
         <Chip label="Chip2" color="primary" size="small"/>
         <Chip label="Chip3" variant="outlined" color="info"/>

         <Chip 
         label="Chip4" 
         variant="outlined" 
         color="secondary"
         avatar={<Avatar>AB</Avatar>}
         />

         <Chip 
         label="Chip4" 
         variant="outlined" 
         color="secondary"
         icon={<Face/>}
         />

         <Chip label="Click" onClick={()=>{alert("This is a chip ")}}/>
         <Chip label="Delete Chip" color="warning" onDelete={()=>{alert("Chip is deleted")}}/>

         {
            Chips.map((c,i)=>(
                <Chip key={i} label={c} onDelete={()=>{
                    handleDel(c)
                }}/>
            ))
         }

      </Stack>   
       
    </>

  )

}

export default MuiChip

// CHIP

// This component use a single Chip component with prop label to mention the text inside chip , color , size , variant prop as well , to show icon and avatar prop to enter image 

// as default Chip are readOnly but we can handle the click event as well 

// we can also pass onDelete handler prop as well which will put a cut icon on chip 