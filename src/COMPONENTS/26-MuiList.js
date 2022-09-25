import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import img1 from "../IMAGES/Testimonial/Sanjay.jpg";
import React from "react";

const MuiList = () => {

  return (

    <>

      <Box
        sx={{
          width: "400px",
          bgcolor: "#0000ff8c",
        }}
      >

        <List>

          <ListItem>
            <ListItemIcon>
              <ArrowForward />
            </ListItemIcon>
            <ListItemText primary="List item 1" />
          </ListItem>

           <Divider/>

          <ListItem>
            <ListItemIcon>
              <ArrowForward />
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItem>
           
            <Divider/>

          <ListItem>
            <ListItemIcon>
              <ArrowForward />
            </ListItemIcon>
            <ListItemText primary="List item 3" />
          </ListItem>

            <Divider/>

          <ListItem>
            <ListItemAvatar>
              <Avatar src={img1} />
            </ListItemAvatar>
            <ListItemText primary="List item 3" />
          </ListItem>

            <Divider/>

          <ListItem>
            <ListItemAvatar>
              <Avatar src={img1} />
            </ListItemAvatar>
            <ListItemText primary="List item 4" secondary="Secondary Text" />
          </ListItem>

            <Divider/>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={img1} />
              </ListItemAvatar>
              <ListItemText
                primary="List item 5"
                secondary="Clickable list item"
              />
            </ListItemButton>
          </ListItem>

        </List>

      </Box>

    </>
  );
};

export default MuiList;

// LIST

// First we use wrapper List component which act is ul list then for individual li with have ListItem component and inside each ListItem component text is mention in prop primary of ListItemText component

// Not only primary text but we can give secondary text as well by passing secondary prop in ListItemText component

// to show any arrow or symbol in li we use ListItemIcon component inside each ListItem component

// we can also pass avatar as symbol of li by passing ListItemAvatar and inside it an Avatar component

// to make li item as clickable put another component ListItemButton as a child of ListItem 

// to seprate each ListItem pass Divider Component between each ListItem 