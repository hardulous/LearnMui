import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const MuiDialog = () => {

  const [Open, setOpen] = useState(false); 

  return (

    <>
    
      <Button onClick={()=>{setOpen(true)}}>Open Dialog</Button>
      
      <Dialog open={Open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>Submit the test ?</DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure you want to submit the task?</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
            <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>

    </>

  )

}

export default MuiDialog

// DIALOG

// first it use wrapper Dialog component which have prop like open , onClose handler , inside it we have DialogTitle component for heading of dialog , then we have DialogContent component and text and body of dialog is inside DialogContentText component , at last to show some button we have DialogActions component 