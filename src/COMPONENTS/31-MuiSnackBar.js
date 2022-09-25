import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";

const MuiSnackBar = () => {

  const [Open, setOpen] = useState(false);

  return (

    <>

      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        Submit
      </Button>

      <Snackbar
        message="Form Submited Successfully"
        autoHideDuration={4000}
        open={Open}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
            vertical:"bottom",
            horizontal:"center"
        }}
      />

    </>

  );

};

export default MuiSnackBar;

// SNACKBAR

// this component is depend on other component like Button to trigger its visibility on Click , by default SnakBar is hidden , take prop messsage to show some message on visible and autoHideDuration prop to automatically hide its visibility after some time

// to handle close and opening we pass open and onClose handler prop to SnackBar component , and we can also change the position by passibg anchorOrigin prop to it 
