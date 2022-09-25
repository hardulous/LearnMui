import { Favorite, Home, Person } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'

const MuiBottomNavi = () => {
  
  // to keep track of active Action
  const [isActive, setisActive] = useState(0);  

  return (

    <>
    
      <BottomNavigation 
      sx={{
        width:"100%",
        position:"absolute",
        bottom:"0"
      }}
      value={isActive}
      onChange={(e,newValue)=>{setisActive(newValue)}}
      showLabels
      >

        <BottomNavigationAction label="HOME" icon={<Home/>}/>
        <BottomNavigationAction label="FAVOURATE" icon={<Favorite/>}/>
        <BottomNavigationAction label="PROFILE" icon={<Person/>}/>

      </BottomNavigation>

    </>

  )

}

export default MuiBottomNavi

// BOTTOM NAVIGATION

// takes a wrapper BottomNavigation component which we will be positioned to botton and anywhere in app by sx prop and inside this component we add action by BottomNavigationAction component in which we pass icon prop and label prop which describe the icon 

// here using state variable to know current active link by passing value and onChange handler function to Wrapper component , here showing label is by default visible of only active Link , but if we want to show label always pass showLabels prop to BottomNavigation component 