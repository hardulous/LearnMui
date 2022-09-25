import React from "react";

// method to change theme
import { createTheme, colors, Box, ThemeProvider, Typography } from "@mui/material";

// creating custom theme with overiden values

const THEME = createTheme({

  palette: {

    primary: {
      main: colors.red[500],
    },
    secondary: {
      main: colors.pink[500],
    },

  },
  typography:{
    h2:{
        fontFamily:"monospace" // here font family is changed for variant h2 
    }
  }
  

});

const MuiCustomizeTheme = () => {

  return (

    <>
      
      {/* Now the theme object for this box component and its nested child component have been changed and will use the custom theme we have created */}
      <ThemeProvider theme={THEME}>

        <Box
          sx={{
            width: "300px",
            height: "300px",
            bgcolor: "primary.main",
          }}
        >
          
          <Typography variant="h2">AMAN BISHT</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis maiores pariatur iusto dolor a unde incidunt laudantium ut laboriosam! Unde quis, natus obcaecati amet vero dicta minima esse saepe!</Typography>

        </Box>

      </ThemeProvider>

    </>

  );

};

export default MuiCustomizeTheme;

// CUSTOMIZING THEME

// Here by default Mui provide theme that is used by every component provided by MUI

// the default theme in present in customization section MUI docs

// most of time we customize theme acc to our app like pallet colors

// to create a theme we first import createTheme function from MUI and by calling this function it will Takes an incomplete theme object and adds the missing parts and generate a new theme based on the options received means it will create new theme by merging the custom theme object with default theme and will only change the ovveride theme value 

// the creatTheme function accept object as an argument , the object structure should match the theme object structure which is the default theme provided by MUI

// MUI also provide varous color present in customiztion section of docs , by importing colors from @mui/materia we can use those colors

// now Theme is created in order to provide this theme to our component we use ThemeProvider component with theme prop value as created custom theme
