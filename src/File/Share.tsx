import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Tooltip,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { AuthorsType } from "./authors";
import React from "react";
import CustomizedMenus from "./CustomizedMenu";

export interface SimpleDialogProps {
  authors: AuthorsType[];
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, authors } = props;
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCancel = () =>{
    onClose("");
  }

  
 

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Invite</DialogTitle>
      <Grid sx={{ padding: 2 }}>
        <OutlinedInput
          placeholder="Email"
          fullWidth
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {value ? (
                <Button
                  variant="contained"
                  sx={{ bgcolor: "black", fontWeight: "bold" }}
                >
                  Send Invite
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ bgcolor: "black", fontWeight: "bold" }}
                  disabled
                >
                  Send Invite
                </Button>
              )}
            </InputAdornment>
          }
        />
      </Grid>
      <Box sx={{ padding: 3 }}>
        {_.map(authors, (author) => (
          <Grid container sx={{ mt: 4, display: "flex" }}>
            <Grid sx={{ mr: 2 }}>
              <Avatar src={author.icon} />
            </Grid>
            <Grid sx={{ mr: 2, flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>{author.name}</Typography>
              <Tooltip describeChild title={author.email}>
              <Typography>{author.email}</Typography>
              </Tooltip>
            </Grid>
            <CustomizedMenus />
          </Grid>
        ))}
      </Box>

      <Grid
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <Button sx={{ color: "black", fontWeight: "bold" }}>
          <ContentCopyIcon />
          Copy link
        </Button>
        <Button sx={{ color: "black", fontWeight: "bold" }} variant="outlined" onClick={handleCancel}>
          Close
        </Button>
      </Grid>
    </Dialog>
  );
}
