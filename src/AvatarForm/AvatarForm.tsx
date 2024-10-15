
import {
  Avatar,
  Box,
  Button,
  Card,
  Popover,
  TextField,
} from "@mui/material";
import { avatar, AuthorsType } from "./data";
import React, { ChangeEvent, useState } from "react";

export default function AvatarForm() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [details, setDetails] = useState<AuthorsType[]>(avatar);
  const [index, setIndex] = useState<number>(0);
  const [update, setUpdate] = useState<AuthorsType>(details[index]);

  const handleClick = (target: HTMLElement, index: number) => {
    setAnchorEl(target);
    setIndex(index);
    setUpdate(details[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedetails = [...details];
    updatedetails[index] = update;
    setDetails(updatedetails);
    setAnchorEl(null);
  };
  return (
    <Card
      sx={{
        display: "flex",
        width: 200,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        ml: 7,
        mt: 6,
      }}
    >
      {avatar.map((item, i) => (
        <Box key={i}>
          <Avatar
            src={item.icon}
            onClick={(e) => handleClick(e.currentTarget, i)}
          />
        </Box>
      ))}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Card sx={{ display: "flex", flexFlow: "column" }}>
          <Button
            sx={{ m: 2, width: 3, ml: "70%", bgcolor: "black" }}
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>

          <TextField
            label="Name"
            name="name"
            value={update.name}
            onChange={handleUpdate}
            sx={{ m: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={update.email}
            onChange={handleUpdate}
            sx={{ m: 2 }}
          />
          <TextField
            label="Active"
            name="access"
            value={update.access}
            onChange={handleUpdate}
            sx={{ m: 2 }}
          />
          <Button
            sx={{ m: 2, width: 3, ml: "38%", bgcolor: "black" }}
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Card>
      </Popover>
    </Card>
  );
}

	
