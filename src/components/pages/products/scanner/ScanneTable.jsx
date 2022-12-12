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

export default function ScannerTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Typography
        sx={{
          textAlign: "center",
          padding: "10px",
          fontWeight: "bold",
          color: "#3d75ed",
        }}
        variant="h5"
      >
        Token Information
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
              Token Name
            </StyledTableCell>
            <StyledTableCell align="center">{data?.name}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Token Symbol
            </StyledTableCell>
            <StyledTableCell align="center">{data?.symbol}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Total Supply
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.dataSecurity?.total_supply}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Block Number
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.block_number}
            </StyledTableCell>
          </StyledTableRow>
          {/* <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Block Number Minted
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.block_number_minted}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Contract Tpye
            </StyledTableCell>
            <StyledTableCell align="center">
              {data?.contract_type}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Volume 24H(USD)
            </StyledTableCell>
            <StyledTableCell align="center">
              ${data?.dataMarket?.volume24hUSD?.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Volume 24H(ETH)
            </StyledTableCell>
            <StyledTableCell align="center">
              ${data?.dataMarket?.volume24hETH?.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Liquidity(USD)
            </StyledTableCell>
            <StyledTableCell align="center">
              ${data?.dataMarket?.liquidityUSD?.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Liquidity(ETH)
            </StyledTableCell>
            <StyledTableCell align="center">
              ${data?.dataMarket?.liquidityETH?.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Txn Count
            </StyledTableCell>
            <StyledTableCell align="center">
              ${data?.dataMarket?.txns24h}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
              Market Cap
            </StyledTableCell>
            <StyledTableCell align="center">
              ${data?.dataMarket?.marketCap?.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
