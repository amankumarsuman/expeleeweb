import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#3d75ed",
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "20px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  hover: {
    // backgroundColor: theme.palette.action.hover,
    // backgroundColor: "red",
  },
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: "rgb(59 130 246 / 0.5)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SecurityInfo({ data }) {
  return (

    <>
    
    <TableContainer  component={Paper}>
      <Typography
        sx={{
          textAlign: "center",
          padding: "10px",
          fontWeight: "bold",
          color: "#3d75ed",
        }}
        variant="h5"
      >
        Additional Infomation
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ backgroundColor: "#3d75ed" }}>
          <TableRow>
            <StyledTableCell align="center">Indicator</StyledTableCell>
            <StyledTableCell align="center">Value</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
            Block Number Minted
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.block_number_minted}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
            Contract Type
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.contract_type}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
            Last MetaData Sync
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.last_metadata_sync}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
           Last Token uri Sync
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.last_token_uri_sync}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
            Minter Address
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.minter_address?.slice(0, 8)}...
                  {data?.owner_of?.slice(
                    data?.owner_of.length - 3,
                    data?.owner_of.length)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
            Token ID
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.token_id}
            </StyledTableCell>
          </StyledTableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
