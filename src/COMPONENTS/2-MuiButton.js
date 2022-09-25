import React, { useState } from "react";
import {
  Button,
  IconButton,
  Stack,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  Send,
  CallReceived,
  FormatUnderlined,
  FormatBold,
  FormatItalic,
} from "@mui/icons-material";

const MuiButton = () => {

  // Handling selected state of toggle button and change event

  // const [format, setformat] = useState([])
  const [format, setformat] = useState("") 
  
  // array of all selected toggle button and single value if only one toggle is possible by execlusive props

  const handleFormatChange = (e,updatedFormat)=>{
    
    setformat(updatedFormat)

  }

   console.log(format);

  return (
    <>
      <Stack spacing={4}>

        <Stack spacing={2} direction="row">
          <Button variant="text" href="#link">
            Home
          </Button>
          <Button variant="contained">Subscribe</Button>
          <Button variant="outlined">Delete</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            PRIMARY
          </Button>
          <Button variant="text" color="warning">
            WARNING
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small" color="error">
            SMALL
          </Button>
          <Button variant="contained" size="medium" color="error" disableRipple>
            MEDIUM
          </Button>
          <Button
            variant="contained"
            size="large"
            color="error"
            disableElevation
          >
            LARGE
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<Send />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<CallReceived />}>
            Receive
          </Button>

          {/* here adding aria-label for accessibility reason */}
          <IconButton aria-label="send">
            <Send />
          </IconButton>
          <IconButton aria-label="send" size="medium" color="success">
            <Send />
          </IconButton>
          <IconButton
            aria-label="send"
            onClick={() => {
              alert("Button is clicked");
            }}
          >
            <Send />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">

          <ButtonGroup variant="contained" color="secondary">
            <Button>LEFT</Button>
            <Button>CENTER</Button>
            <Button>RIGHT</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" size="large">
            <Button>LEFT</Button>
            <Button>CENTER</Button>
            <Button>RIGHT</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="text"
            orientation="vertical"
            aria-label="button group"
          >
            <Button>LEFT</Button>
            <Button>CENTER</Button>
            <Button>RIGHT</Button>
          </ButtonGroup>

        </Stack>

        <Stack direcion="row">

          <ToggleButtonGroup 
          aria-label="text formating" 
          value={format}
          onChange={handleFormatChange}
          size="large"
          color="warning"
          exclusive
          >
            <ToggleButton value="bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalic/>
            </ToggleButton>
            <ToggleButton value="underlined">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>

        </Stack>

      </Stack>
    </>
  );
};

export default MuiButton;

// ##### BUTTON

// PROPS ::

// 1. variant => similar to variant of typography the button variant have value like text for anchor tag button , contained for primary button and outlined for 2nd primary button

// 2. href => by giving href the button will become an anchor tag

// 3. color => used to give color of button provided by MUI pallete and in order to see all color provided by MUI go to custimization and default theme

// 4. size => to give small,medium and large size of button

// we can also use icon button but in order to use first download the icon library by command npm install @mui/icons-material , by this now we have access to material ui icons and to see all icons just go to material-icon section of component section

// 5. startIcon , endIcon => it is used to add mui icon in start and end of button with text

// 5. IconButton => it is a button with just an icon and without any text and use all props used by Button component

// 6. onClick => it is a prop which can be given to all MUI component to execute a callback function when click on any element

// 7. disabelElevation => used to disable elevation and shadow given to contained button

// 8. disableRipple => used to disable ripple effect when we click on button

// ##### BUTTON GROUP

// used to group multiple button together as single button but all are clickable individually

// when using button group component the variant must be mention to parent ButtonGroup not to child Button component

// 1. orientation => used to change direction of button either in horizontal and vertical

// it is recommended to add a aria-label for accessibility

// ###### TOGGLE BUTTON

// it is used to mark the state of button which is latest clicked by user similar to what active class of Navlink component do , and in order to group multiple toggle button use ToggleButtonGroup

// in order to make toggle work we give value prop to both toggleGroup and toggle component and which of the toggleButton value equal to any of toggleButton value then that toggleButton we be active 

// we can give size , color , variant and orientation prop to toggleButtonGroup 

// here our value of state must be array as if multiple toggle are possible then all selected state value must be stored but by using exclusive prop now only one toggle is possible and for this we have to make our state single string value instead of array 