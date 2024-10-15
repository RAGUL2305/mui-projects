import React, { useState } from "react";
import { AuthorsType, CountryType } from "./CountryData";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import _ from "lodash";
import SimpleDialog from "./ViewAll";

interface Data {
  data: CountryType[];
  authors: AuthorsType[];
}

const TopCountires = (props: Data) => {
  const { data, authors } = props;
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Card>
          <CardContent>
            <Grid
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Top installed countries
              </Typography>
              <Button
                sx={{ border: "blue" }}
                onClick={handleClickOpen}
                variant="outlined"
              >
                Viewall
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                data={data}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {_.map(_.slice(data, 0, 5), (datum) => (
                <Grid container sx={{ mt: 1 }}>
                  <Grid item xs={2} sm={1.5} md={2} lg={1}>
                    <img width="30" src={datum.image} />
                  </Grid>
                  <Grid
                    item
                    xs={2.5}
                    sm={2.5}
                    md={2}
                    lg={2}
                    sx={{ display: "flex" }}
                  >
                    <Typography>{datum.label}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2.5}
                    sm={2.5}
                    md={2}
                    lg={3}
                    sx={{ display: "flex" }}
                  >
                    <AdbIcon sx={{ width: "15px" }} />
                    <Typography>{datum.android}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2.5}
                    sm={2.5}
                    md={2}
                    lg={3}
                    sx={{ display: "flex" }}
                  >
                    <WindowIcon sx={{ width: "15px" }} />
                    <Typography>{datum.windows}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2.5}
                    sm={2.5}
                    md={2}
                    lg={3}
                    sx={{ display: "flex" }}
                  >
                    <AppleIcon sx={{ width: "15px" }} />
                    <Typography>{datum.ios}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography sx={{ display: "flex", fontWeight: "bold" }}>
              Top authors
            </Typography>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {_.map(authors, (author) => (
                <Grid container>
                  <Grid item xs={2} sm={2} md={3} lg={1.5} sx={{ mt: 1.6 }}>
                    <Avatar src={author.icon} />
                  </Grid>
                  <Grid item xs={5} sm={5} md={3} lg={2.5} sx={{ mt: 1.6 }}>
                    <Typography sx={{ textAlign: "start" }}>
                      {author.name}
                    </Typography>
                    <Typography sx={{ display: "flex" }}>
                      <FavoriteIcon sx={{ width: "14px", mr: 1 }} />
                      <Typography>{author.rating}</Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sm={5}
                    md={6}
                    lg={8}
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                  >
                    <EmojiEventsIcon />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Card>
          <CardContent>
            <Card sx={{ bgcolor: "#007867", mb: 2, borderRadius: 4 }}>
              <CardContent sx={{ color: "white" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  38,566
                </Typography>
                <Typography sx={{ fontSize: "19px" }}>Conversion</Typography>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: "#1478A4", borderRadius: 4 }}>
              <CardContent sx={{ color: "white" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  55,566
                </Typography>
                <Typography sx={{ fontSize: "19px" }}>Applications</Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TopCountires;
