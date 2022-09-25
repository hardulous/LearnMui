import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [AcceptTnC, setAcceptTnC] = useState(false);
  const [Skills, setSkills] = useState([]);

  console.log(AcceptTnC, Skills);

  const handleSkill = (e) => {
    const i = Skills.indexOf(e.target.value);
    if (i === -1) {
      setSkills([...Skills, e.target.value]);
    } else {
      setSkills(Skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (

    <>

      <Box>

        <Box>
          <FormControlLabel
            label="I accept terms and conditions"
            control={
              <Checkbox
                checked={AcceptTnC}
              />
            }
            onChange={(e) => {
              setAcceptTnC(e.target.checked);
            }}
          />
        </Box>

        <Box>
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={AcceptTnC}
            onChange={(e) => {
              setAcceptTnC(e.target.checked);
            }}
          />
        </Box>

        <Box>
          <FormControl error>
            <FormLabel>Select Your Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                label="HTML"
                value="HTML"
                control={<Checkbox checked={Skills.includes("HTML")} />}
                onChange={handleSkill}
              />
              <FormControlLabel
                label="CSS"
                value="CSS"
                control={<Checkbox size="small" color="secondary" />}
                checked={Skills.includes("CSS")}
                onChange={handleSkill}
              />
              <FormControlLabel
                label="JAVASCRIPT"
                value="JAVASCRIPT"
                control={<Checkbox />}
                checked={Skills.includes("JAVASCRIPT")}
                onChange={handleSkill}
              />
            </FormGroup>
            
            <FormHelperText>Here is your skill</FormHelperText>

          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default MuiCheckbox;

// CHECKBOX

// we can also add icon as checbox by passing icon and checkedIcon prop to Checkbox
