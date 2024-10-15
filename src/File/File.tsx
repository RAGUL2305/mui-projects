import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { AuthorsType } from "./authors";
import _ from "lodash";
import BasicMenu from "./MenuButton";


interface Data {
  authors: AuthorsType[];
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const File = (props: Data) => {
  const { authors } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container sx={{display: 'flex' , justifyContent:'space-between'}}>
                <Grid item >
                  <img src="https://assets.minimals.cc/public/assets/icons/files/ic-folder.svg" />
                </Grid>
                <Grid item>
                  <Grid container>
                <Grid item sx={{ mt: 0.7 }}>
                  <Rating max={1} />
                </Grid>
                <Grid item>
                 <BasicMenu  authors={authors}/>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
              </Grid>

            <Grid sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
                Docs
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }}>
              <Typography
                sx={{ fontWeight: 50, fontSize: "12px", color: "grey" }}
              >
                2.24 Gb {bull}100 files
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }}>
              <AvatarGroup max={3}>
                {_.map(authors, (author) => (
                  <Avatar src={author.icon} />
                ))}
              </AvatarGroup>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default File;
