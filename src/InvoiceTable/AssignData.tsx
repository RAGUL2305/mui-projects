import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { rows } from "./TableData";

const name1 = rows.filter((row) => row.name === "Ragul");
const name2 = rows.filter((row) => row.name === "Tamil");
const name3 = rows.filter((row) => row.name === "Vasanth");

const AssignData = () => {
  return (
    <Grid>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Ragul
        </AccordionSummary>
        <AccordionDetails>
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
                {name1.map((row) => (
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
                          p: 1,
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Tamil
        </AccordionSummary>
        <AccordionDetails>
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
                {name2.map((row) => (
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
                          p: 1,
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Vasanth
        </AccordionSummary>
        <AccordionDetails>
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
                {name3.map((row) => (
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
                          p: 1,
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
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default AssignData;
