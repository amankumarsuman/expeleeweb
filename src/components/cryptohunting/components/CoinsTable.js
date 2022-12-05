import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
// import {
//   Container,
//   createTheme,
//   TableCell,
//   LinearProgress,
//   ThemeProvider,
//   Typography,
//   TextField,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableContainer,
//   Table,
//   // Paper,
// } from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { createStyles, makeStyles } from '@mui/styles';
import useStyles from "./style";

import { Paper,  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Select,
  MenuItem,
  Grid, } from "@mui/material";
import { CssTextField } from "../../coreComponents/CustomInputField";


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol,setCurrency } = CryptoState();
 

//   const useStyles = makeStyles((theme) =>
//   createStyles({
//     row: {
//       backgroundColor: "#16171a",
//       cursor: "pointer",
//       "&:hover": {
//         backgroundColor: "#131111",
//       },
//       fontFamily: "Montserrat",
//     },
//     pagination: {
//       "& .MuiPaginationItem-root": {
//         color: "gold",
//       },
//     },
//   }),
// );
  // const useStyles = makeStyles({
  //   row: {
  //     backgroundColor: "#16171a",
  //     cursor: "pointer",
  //     "&:hover": {
  //       backgroundColor: "#131111",
  //     },
  //     fontFamily: "Montserrat",
  //   },
  //   pagination: {
  //     "& .MuiPaginationItem-root": {
  //       color: "gold",
  //     },
  //   },
  // });

  const classes = useStyles();
  const history = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, color:"#3d75ed"}}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
       
        {/* <Header/> */}
        <CssTextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          
          style={{ marginBottom: 20, width: "100%",background:"white",borderColor:"blue" }}
          onChange={(e) => setSearch(e.target.value)}
        />
             <div style={{background:"transparent",marginBottom:"2em",padding:"10px",display:"flex",justifyContent:"space-between"}}>

<div>

</div>
<Select
sx={{background:"white",textAlign:"end"}}
      variant="outlined"
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={currency}
      style={{ width: 100, height: 40, marginLeft: 15 }}
      onChange={(e) => setCurrency(e.target.value)}
    >
      <MenuItem value={"USD"}>USD</MenuItem>
      <MenuItem value={"INR"}>INR</MenuItem>
    </Select>
  </div>
        <TableContainer component={Paper}>
     
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#3d75ed" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history(`/coins/${row.id}`)}
                        className={classes.row}
                        style={{border:"1px solid red !important"}}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                          width="10% !important"
                            src={row?.image}
                            alt={row.name}
                            height="40"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                color:"#3d75ed",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "white" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell sx={{color:"white"}} align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell sx={{color:"white"}}  align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
