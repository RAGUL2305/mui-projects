import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid } from "@mui/material";


export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const[value,setValue] = React.useState<string>('Can Edit')

  
  const handleEditClick = (event: React.MouseEvent<HTMLElement>  ) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleValueClick = (value: string) =>{
    setValue(value)
    handleClose();
  }

  return (
    <Grid>
      <Button
        onClick={handleEditClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{bgcolor:'none',color:'black',fontWeight:'bold'}}
      
      >
        {value}
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() =>handleValueClick('Can View')} disableRipple>
          <VisibilityIcon />
          Can view
        </MenuItem>
        <MenuItem onClick={() => handleValueClick('Can Edit')} disableRipple>
          <EditIcon />
          Can edit
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ color: "orangered" }}
        >
          <DeleteIcon />
          Remove
        </MenuItem>
      </Menu>
    </Grid>
  );
}
