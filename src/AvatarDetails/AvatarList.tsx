import React, { useState } from "react";
import { AuthorsType } from "./AvatarDetails";
import { Avatar, AvatarGroup, Grid } from "@mui/material";
import _ from "lodash";
import CheckList from "./CheckList";

interface Data {
  authors: AuthorsType[];
}
const AvatarList = (props: Data) => {
  const { authors } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleCheckboxChange = (name: string) => {
    setSelectedItems((arg) => {
      let datum;
      if (!arg.includes(name)) {
        datum = [...arg, name];
      } else {
        datum =  arg.filter((item) => item !== name);
      }
      console.log(datum);
      return datum;
    });
  };

  return (
    <Grid container>
      <Grid item>
        <Grid>
          <AvatarGroup max={3}>
            {_.map(_.slice(authors, 0, 2), (author) => (
              <Avatar src={author.icon} onClick={()=>handleCheckboxChange(author.name)}/>
            ))}
            <Avatar onClick={handleClickOpen}>
              +{_.size(_.slice(authors, 2, _.size(authors)))}
            </Avatar>
          </AvatarGroup>
          <CheckList
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            data={authors}
            selectedItems={selectedItems}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AvatarList;
