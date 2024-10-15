import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SimpleDialog from "./Share";
import { AuthorsType } from "./authors";
import { Box } from "@mui/material";

interface Data {
  authors: AuthorsType[];
}

export default function BasicMenu(props: Data) {
  const { authors } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [opened, setOpened] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpened(true);
    setAnchorEl(null);
  };

  const handleClosed = (value: string) => {
    setOpened(false);
    setSelectedValue(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ContentCopyIcon /> Copy Link
        </MenuItem>
        <MenuItem>
          <Button
            sx={{
              border: "none",
              height: "19px",
              width: "15px",
              color: "black",
            }}
            onClick={handleClickOpen}
            variant="outlined"
          >
            <ShareIcon /> Share
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditIcon /> Edit
        </MenuItem>
        <MenuItem sx={{ color: "orangered" }} onClick={handleClose}>
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
      <SimpleDialog
        selectedValue={selectedValue}
        open={opened}
        onClose={handleClosed}
        authors={authors}
      />
    </Box>
  );
}
