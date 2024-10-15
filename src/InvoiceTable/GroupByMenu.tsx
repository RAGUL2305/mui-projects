import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

export interface MenuProps {
  open: boolean;
  opened: null | string;
  anchorEl: null | HTMLElement;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  handleGroupByClick: (item: string | null) => void;
}

export default function GroupByMenu(props: MenuProps) {
  const {
    open,
    opened,
    anchorEl,
    handleClick,
    handleClose,
    handleGroupByClick,
  } = props;

  return (
    <Grid container>
      <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Grid>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "white", bgcolor: "black" }}
          >
            Group By
          </Button>
        </Grid>
        <Grid>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleGroupByClick("assign")}>
              Assign
            </MenuItem>
            <MenuItem onClick={() => handleGroupByClick("status")}>
              Status
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      {opened && (
        <Button
          onClick={() => handleGroupByClick(null)}
          variant="outlined"
          sx={{ color: "red"}}
        >
          x
        </Button>
      )}
    </Grid>
  );
}
