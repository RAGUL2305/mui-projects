import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { AuthorsType } from "./DetailsData";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import _ from "lodash";

interface Data {
  authors: AuthorsType[];
}

const DetailsCard = (props: Data) => {
  const { authors } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card>
          <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
            {_.map(authors, (author) => (
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <Card>
                  <CardContent>
                    <Grid container>
                      
                        <List sx={{display:'flex'}}>
                          <ListItem>
                          <ListItemAvatar>
                            <Avatar src={author.icon} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={author.name}
                            secondary={author.date} 
                          ></ListItemText>
                          </ListItem>
                        </List>
                   
                    </Grid>
                    <Grid
                      container
                      sx={{ display: "flex", mt: 4, color: "grey" }}
                    >
                      <Grid sx={{ display: "flex" }}>
                        <CalendarMonthIcon />
                        <Typography>3 days 2 nights</Typography>
                      </Grid>
                      <Grid sx={{ display: "flex", ml: 3 }}>
                        <PeopleIcon />
                        <Typography>3-5 guests</Typography>
                      </Grid>
                    </Grid>
                    <Grid sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ mt: 2, borderRadius: 4 }}
                        image={author.image}
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DetailsCard;
