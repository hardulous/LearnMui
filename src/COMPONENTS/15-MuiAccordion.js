import React , { useState } from 'react'
import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

const MuiAccordion = () => {

   // state variable to make only one accordion to be extended at a time  
   const [Expanded, setExpanded] = useState("");
   
   const handleChange = (panel, isExpanded) => {

    setExpanded(isExpanded ? panel : false);

   };

  return (
    
    <>
    
      <Accordion expanded={ Expanded==='panel1' } onChange={(e,isExpanded)=>{handleChange("panel1",isExpanded)}}>
        <AccordionSummary id="panel1-header" aria-controls='panel1-content' expandIcon={<ExpandMore/>}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat similique distinctio modi, cum repellendus minus doloribus eius ipsa nobis aspernatur nulla. Voluptatem inventore non officia sunt fuga eveniet perferendis quos?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={ Expanded==='panel2' } onChange={(e,isExpanded)=>{handleChange("panel2",isExpanded)}}>
        <AccordionSummary id="panel2-header" aria-controls='panel2-content' expandIcon={<ExpandMore/>}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat similique distinctio modi, cum repellendus minus doloribus eius ipsa nobis aspernatur nulla. Voluptatem inventore non officia sunt fuga eveniet perferendis quos?</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={ Expanded==='panel3' } onChange={(e,isExpanded)=>{handleChange("panel3",isExpanded)}}>
        <AccordionSummary id="panel3-header" aria-controls='panel3-content' expandIcon={<ExpandMore/>}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat similique distinctio modi, cum repellendus minus doloribus eius ipsa nobis aspernatur nulla. Voluptatem inventore non officia sunt fuga eveniet perferendis quos?</Typography>
        </AccordionDetails>
      </Accordion>

    </>

  )
}

export default MuiAccordion

// ACCORDION

// To use Accordion component we need Wrapper Accordion component then AccordionSummary component which show the heading of a accordion and this AccordionSummary take a prop exandIcon which can take any icon which become a button to expand and un expand and at last the hidden AccordionDetails component which will appear based on expand

// in order to use state variable to keep track of which accordion is expanded pass prop expanded and onChange method to Accordion component , and this onChange method also have access to boolean which tell wheter accordion is expanded or not 