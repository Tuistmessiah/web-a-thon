import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function ConceptTable(props) {
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sample Frame</TableCell>
              <TableCell align="right" sortDirection={false}>
                <TableSortLabel
                  active={props.order.orderedName === "in_frame"}
                  direction={
                    props.order.orderedName === "in_frame"
                      ? props.order.orientation
                      : "asc"
                  }
                  onClick={() => props.orderPage("in_frame")}
                >
                  in_frame
                </TableSortLabel>
              </TableCell>
              <TableCell align="right" sortDirection={false}>
                {" "}
                <TableSortLabel
                  active={props.order.orderedName === "out_frame"}
                  direction={
                    props.order.orderedName === "out_frame"
                      ? props.order.orientation
                      : "asc"
                  }
                  onClick={() => props.orderPage("out_frame")}
                >
                  out_frame
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">duration</TableCell>
              <TableCell align="right">value</TableCell>
              <TableCell align="right">labels</TableCell>
              <TableCell align="right">location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow key={row.content.sample_frame}>
                <TableCell component="th" scope="row">
                  {row.content.sample_frame}
                </TableCell>
                <TableCell align="right">{row.in_frame}</TableCell>
                <TableCell align="right">{row.out_frame}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.content.value}</TableCell>
                <TableCell align="right">
                  {row.content.labels.join(", ")}
                </TableCell>
                <TableCell align="right">
                  {row.content.location.join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
