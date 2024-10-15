import Dialog from "@mui/material/Dialog";
import { Box, Grid, Typography } from "@mui/material";
import { CountryType } from "./CountryData";
import AdbIcon from "@mui/icons-material/Adb";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import _ from "lodash";

export interface SimpleDialogProps {
  data: CountryType[];
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, data } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ padding: 2 }}>
        {_.map(_.slice(data, 5), (datum) => (
          <Grid container spacing={4} rowSpacing={2}>
            <Grid item xs={1} sm={1.5} md={1} lg={1}>
              <img width="20" src={datum.image} />
            </Grid>
            <Grid item xs={2} sm={2} md={2.5} lg={2.5} sx={{ display: "flex" }}>
              <Typography>{datum.label}</Typography>
            </Grid>
            <Grid
              item
              xs={2.5}
              sm={2.5}
              md={2.5}
              lg={2.5}
              sx={{ display: "flex" }}
            >
              <AdbIcon sx={{ width: "15px" }} />
              <Typography>{datum.android}</Typography>
            </Grid>
            <Grid
              item
              xs={2.5}
              sm={2.5}
              md={2.5}
              lg={2.5}
              sx={{ display: "flex" }}
            >
              <WindowIcon sx={{ width: "15px" }} />
              <Typography>{datum.windows}</Typography>
            </Grid>
            <Grid
              item
              xs={2.5}
              sm={2.5}
              md={2.5}
              lg={2.5}
              sx={{ display: "flex" }}
            >
              <AppleIcon sx={{ width: "15px" }} />
              <Typography>{datum.ios}</Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Dialog>
  );
}
