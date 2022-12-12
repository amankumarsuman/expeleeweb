import {
  Avatar,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { ProgressWithLabel } from "../../../coreComponents/ProgressWithLabel";
import ScannerTable from "./ScanneTable";
import SecurityInfo from "./SecurityInfo";
import styles from "./scanner.module.css";
function ScannerDetails({ data }) {
  return (
    <>
      {data?.length === 0 ? (
        <div style={{ border: "1px solid red" }}>
          <ProgressWithLabel />
        </div>
      ) : (
        <Grid
          sx={{ marginTop: "15px", width: "95%", margin: "auto" }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Paper sx={{ padding: "15px" }} elevation={5}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: "#3d75ed",
                  fontWeight: "bold",
                  marginBottom: "1em",
                }}
              >
                Token Identity Information
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Paper
                  elevation={6}
                  sx={{
                    // border: "1px solid pink",
                    // border:   "1px solid red ",
                    padding: "10px",
                    width: "40%",
                    marginLeft: "35px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                  }}
                >
                  Token Name:
                </Paper>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    marginRight: "32px",
                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                  }}
                >
                  {data?.name}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    marginTop: "10px",
                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                  }}
                >
                  Token Symbol:
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    marginTop: "10px",
                    marginTop: "10px",

                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                  }}
                >
                  {data?.symbol}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    marginTop: "10px",

                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                  }}
                >
                  Contract Address::
                </Typography>

                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    marginTop: "10px",

                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                  }}
                >
                  {data?.token_address?.slice(0, 6)}...
                  {data?.token_address?.slice(
                    data?.token_address.length - 3,
                    data?.token_address.length
                  )}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                    borderRadius: "10px",
                    marginTop: "10px",

                    marginBottom: "5px",
                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                    // marginLeft:"35px"
                  }}
                >
                  Contract Creator:
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    padding: "10px",
                    width: "40%",
                    marginTop: "10px",

                    fontWeight: "bold",
                    boxShadow: "5px 10px green",
                    background: "rgb(59 130 246 / 0.5)",
                    // marginLeft:"35px"
                  }}
                >
                  {data?.owner_of?.slice(0, 6)}...
                  {data?.owner_of?.slice(
                    data?.owner_of.length - 3,
                    data?.owner_of.length
                  )}
                </Typography>
              </div>
              {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                 sx={{
                  border: "1px solid grey",
                  padding: "10px",
                  width: "40%",
                  borderRadius:"10px",
                  marginBottom:"5px",
                  fontWeight:"bold",
                  marginTop:"10px",

                  boxShadow:"5px 10px green",
                  background:"rgb(59 130 246 / 0.5)"
                  // marginLeft:"35px"
                }}
                >Contract Owner:</Typography>
                <Typography
                 sx={{
                  border: "1px solid grey",
                  padding: "10px",
                  width: "40%",
                  borderRadius:"10px",
                  marginBottom:"5px",
                  fontWeight:"bold",
                  marginTop:"10px",
                  boxShadow:"5px 10px green",
                  background:"rgb(59 130 246 / 0.5)"
                  // marginLeft:"35px"
                }}
                >
                  {data?.dataSecurity?.owner_address?.slice(0, 6)}...
                  {data?.dataSecurity?.owner_address?.slice(
                    data?.dataSecurity?.owner_address.length - 3,
                    data?.dataSecurity?.owner_address.length
                  )}
                </Typography>
              </div> */}
            </Paper>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Paper
            className={styles.scorebg}
              sx={{
                padding: "75px",
                justifyContent: "center",
                display: "flex",
              
              }}
              elevation={5}
            >
              <Typography
                variant="h6"
                sx={{ padding: "100px", fontWeight: "bold", color: "black",
            
                
              }}
              >
                <span >
                Expe Score
                </span>
               
              </Typography>
              <span>
             
                <Avatar
                  sx={{ padding: "90px", background: "rgb(59 130 246 / 0.5)",border:"3px dotted #3d75ed",fontWeight:"bold",color:"black" }}
                >
                  {data?.score}
                </Avatar>
              
              </span>
            </Paper>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <ScannerTable data={data} />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <SecurityInfo data={data} />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      )}
    </>
  );
}

export default ScannerDetails;
