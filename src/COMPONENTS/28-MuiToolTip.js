import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiToolTip = () => {

  return (

    <>

      <Tooltip title="Delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete" placement="bottom" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete" placement="right-end" arrow enterDelay={500} leaveDelay={200}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

    </>

  );

};

export default MuiToolTip;

// TOOLTIP

// For which of the component we want to add Tooltip wrap that component in Tooltip wrapper component which take prop title which is shown when we hover and click on component

// to change the position of tooltip around component add placement prop 

// to add arrow to tooltip add arrow prop 

// to control transition of tooltip appear and disappear pass enterDelay and leaveDelay prop 