import { Save } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import React from 'react'

const MuiLoadingButton = () => {

  return (

    <>
    
      <Stack spacing={2} direction="row">

        <LoadingButton variant="outlined">Submit</LoadingButton>

        <LoadingButton loading variant="outlined">Submit</LoadingButton>

        <LoadingButton variant="outlined" loadingIndicator="Loading">Fetch Data</LoadingButton>

        <LoadingButton loading variant="outlined" loadingIndicator="Loading">Fetch Data</LoadingButton>

        <LoadingButton 
        variant="contained" 
        loadingPosition='start' 
        startIcon={<Save/>}>
            Save
        </LoadingButton>

        <LoadingButton 
        variant="contained"
        loading 
        loadingPosition='start' 
        startIcon={<Save/>}>
            Save
        </LoadingButton>

      </Stack>

    </>

  )

}

export default MuiLoadingButton

// LOADING BUTTON

// this component is similar to Button component but by passing loading prop as true to it will make button non clickable untill or unless loading prop become false

// by default circular loading will be shown as loader which we can change by passing loadingIndicator prop 

// to give loading indicator position we pass loadingPosition prop and similar to Button component it will also take startIcon and endIcon prop 