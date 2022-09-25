import { Box, Grid } from '@mui/material'
import React from 'react'

const MuiGrid = () => {

  return (

    <>
    
      <Grid container my={2}>
        <Grid item xs={12} md={6} lg={3}>
            <Box bgcolor="blue" p={2}>ITEM 1</Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Box bgcolor="red" p={2}>ITEM 2</Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Box bgcolor="yellow" p={2}>ITEM 3</Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Box bgcolor="green" p={2}>ITEM 4</Box>
        </Grid>
      </Grid>

      <Grid container my={2}>
        <Grid item xs>
            <Box bgcolor="blue" p={2}>ITEM 1</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="red" p={2}>ITEM 2</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="yellow" p={2}>ITEM 3</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="green" p={2}>ITEM 4</Box>
        </Grid>
      </Grid>

      <Grid container my={2}>
        <Grid item xs={6}>
            <Box bgcolor="blue" p={2}>ITEM 1</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="red" p={2}>ITEM 2</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="yellow" p={2}>ITEM 3</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="green" p={2}>ITEM 4</Box>
        </Grid>
      </Grid>   

      <Grid container my={2}>
        <Grid item xs={6}>
            <Box bgcolor="blue" p={2}>ITEM 1</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="red" p={2}>ITEM 2</Box>
        </Grid>
        <Grid item xs>
            <Box bgcolor="yellow" p={2}>ITEM 3</Box>
        </Grid>
        <Grid item xs="auto">
            <Box bgcolor="green" p={2}>ITEM 4</Box>
        </Grid>
      </Grid>

      <Grid container my={2} columnSpacing={2}>
        <Grid item xs={3}>
            <Box bgcolor="blue" p={2}>ITEM 1</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="red" p={2}>ITEM 2</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="yellow" p={2}>ITEM 3</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="green" p={2}>ITEM 4</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="orange" p={2}>ITEM 5</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="purple" p={2}>ITEM 6</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="black" p={2}>ITEM 7</Box>
        </Grid>
        <Grid item xs={3}>
            <Box bgcolor="gold" p={2}>ITEM 8</Box>
        </Grid>
      </Grid>   


    </>

  )

}

export default MuiGrid

// GRID

// Grid component has 2 variation , a Grid component for parent and Grid item for children

// in Grid parent add container prop and to child we add item prop

// HOW GRID WORKS

// The Grid component internally use flexbox module , the grid consist 12 column , each Grid item can take 1 or more than 1 column but not more than 12 , there are 5 breakpoint based on which we can define which column take how much width , xs , sm , md , lg and sl . We can assign integer value of Grid item to specify how much width they are taking out of total of 12 

// we can simple pass prop like xs,sm,md,lg and xl to specify Grid item width acc to viewport

// To equally distribute available width between all Grid item , just add xs prop to all Grid item without any value 

// by xs value is small , the Grid item take width equal to the content present in it 

// to provide row and column space we pass spacing prop to Grid parent component and for individual spacing in either row and column we pass rowSpacing and columnSpacing prop 