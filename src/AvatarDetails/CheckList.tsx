import Dialog from "@mui/material/Dialog";
import {
  Avatar,
  Box,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { AuthorsType } from "./AvatarDetails";
import React, { useState } from "react";

export interface SimpleDialogProps {
  data: AuthorsType[];
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  selectedItems: string[];
  handleCheckboxChange: (name: string) => void;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CheckList(props: SimpleDialogProps) {
  const {
    onClose,
    selectedValue,
    open,
    data,
    selectedItems,
    handleCheckboxChange,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box padding={2}>
        {_.map(_.slice(data,2), (datum) => (
          <List sx={{ display: "flex" }}>
            <Checkbox
              {...label}
              checked={selectedItems.includes(datum.name)}
              onChange={() => handleCheckboxChange(datum.name)}
            />
            <ListItem>
              <ListItemAvatar>
                <Avatar src={datum.icon} />
              </ListItemAvatar>
              <ListItemText primary={datum.name}></ListItemText>
            </ListItem>
          </List>
        ))}
      </Box>
    </Dialog>
  );
}
