import React, { ChangeEvent, useState } from "react";
import { Box, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import CountrySelect from "./data";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Dashboard() {
  const [number, setNumber] = useState<string>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^[0-9]*$/.test(value)) {
      setNumber(value);
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardContent>
            <Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Switch {...label} defaultChecked />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={6}>
        <Card>
          <CardContent>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Phone number"
                    placeholder="Enter phone number "
                    variant="outlined"
                    value={number}
                    onChange={handleInput}
                    fullWidth
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CountrySelect />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="State/region"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Zip/code"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Role"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}></Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    Create user
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
