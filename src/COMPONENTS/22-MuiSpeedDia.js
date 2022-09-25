import { CopyAll, Edit, Print, Share } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

const MuiSpeedDia = () => {

  return (

    <>
    
      <SpeedDial 
      ariaLabel='speed dial' 
      sx={{position:"absolute",bottom:"16px",right:"16px"}}
      icon={<SpeedDialIcon openIcon={<Edit/>}/>}
      >
        <SpeedDialAction icon={<CopyAll/>} tooltipTitle="Copy"/> 
        <SpeedDialAction icon={<Print/>} tooltipTitle="Print" tooltipOpen/> 
        <SpeedDialAction icon={<Share/>} tooltipTitle="Share"/> 

      </SpeedDial>

    </>

  )

}

export default MuiSpeedDia

// SPEED DIAL

// this component consist of SppedDial wrapper component with ariaLabel prop is must to pass and have to give position by mentioning sx prop and also have icon prop which take SppedDialIcon component which act as button to show nested SppedDialAction component which have prop like icon and toottipTitle to describe the icon

// on desktop on hover of SpeedDial component we will be shown SppedDialAction component which on hover will show title of each SpeedDialAction , but on mobile hover will become click 

// the SpeedDialIcon component also take openIcon prop which will show other icon when clicked on speed dial 

// to allow tootipTitle to always visible pass tootlipOpen prop to SpeedDialAction component 