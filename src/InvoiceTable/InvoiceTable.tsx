import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Grid, Tooltip } from "@mui/material";
import GroupByMenu from "./GroupByMenu";
import AssignData from "./AssignData";
import StatusData from "./StatusData";
import { rows } from "./TableData";

export default function InvoiceTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [opened, setOpened] = React.useState<null | string>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGroupByClick = (item: string | null): void => {
    setOpened(item);
    setAnchorEl(null);
    // console.log(rows)
  };

  return (
    <Grid container>
      <Grid item>
        <GroupByMenu
          open={open}
          opened={opened}
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
          handleGroupByClick={handleGroupByClick}
        />
        <Grid item>
          {opened === "assign" || opened === "status" || (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="center">Item</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Assign</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.item}</TableCell>
                      <TableCell align="center">
                        <Button
                          sx={{
                            bgcolor: row.color,
                            color: "black",
                            minWidth: 110,
                            minHeight: 40,
                            borderRadius: 2,
                            p:1
                          }}
                        >
                          {row.status}
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip describeChild title={row.name}>
                          <Avatar src={row.assign} />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {opened === "assign" && <AssignData />}
          {opened === "status" && <StatusData />}
        </Grid>
      </Grid>
    </Grid>
  );
}
