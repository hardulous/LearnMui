import { Rating, Stack } from "@mui/material";
import { Favorite,FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";

const MuiRating = () => {

  const [Value, setValue] = useState(0);

  console.log(Value)

  return (

    <>

      <Stack spacing={2}>
        <Rating
          value={Value}
          onChange={(e,newValue) => {
            setValue(newValue);
          }}
          precision={0.5}
          size="large"
        />
        <Rating
          value={Value}
          onChange={(e,newValue) => {
            setValue(newValue);
          }}
          precision={0.5}
          size="large"
          icon={<Favorite/>}
          emptyIcon={<FavoriteBorder/>}
        />
        <Rating
          value={4}
          size="large"
          readOnly
        />
         <Rating
          size="large"
          highlightSelectedOnly
        />
      </Stack>

    </>

  );
};

export default MuiRating;


// RATING

// in rating component we can get rating given by user by making it a controlled component and here in onChange handler function also get the new rating value in the form of either Number or Null which we can use to change state variable

// we can give precision prop to rating by which we can allow user to give rating in fraction and some other multiple as well , EX if precision is 0.5 then now user can give half rating as well 

// we can give icon and emptyIcon prop to change icon of rating when clicked and not clicked 

// to make rating read only pass readOnly prop to it 

// to highlight means show color to selected rating only pass highlightSelectedOnly prop  