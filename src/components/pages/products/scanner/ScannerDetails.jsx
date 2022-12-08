import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { ProgressWithLabel } from "../../../coreComponents/ProgressWithLabel";
import ScannerTable from "./ScanneTable";
import SecurityInfo from "./SecurityInfo";

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
            <Paper
              sx={{ padding: "15px", backgroundColor: "#C0C0C0" }}
              elevation={5}
            >
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
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                  }}
                >
                  Token Name:
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                  }}
                >
                  {data?.dataMarket?.name}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                  }}
                >
                  Token Symbol:
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                  }}
                >
                  {data?.dataMarket?.symbols[0]}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                  }}
                >
                  Contract Address::
                </Typography>

                <Typography
                  sx={{
                    border: "1px solid grey",
                    padding: "10px",
                    width: "40%",
                  }}
                >
                  {data?.dataMarket?.address?.slice(0, 6)}...
                  {data?.dataMarket?.address?.slice(
                    data?.dataMarket?.address.length - 3,
                    data?.dataMarket?.address.length
                  )}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography>Contract Creator:</Typography>
                <Typography>
                  {data?.dataSecurity?.creator_address?.slice(0, 6)}...
                  {data?.dataSecurity?.creator_address?.slice(
                    data?.dataSecurity?.creator_address.length - 3,
                    data?.dataSecurity?.creator_address.length
                  )}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Typography>Contract Owner:</Typography>
                <Typography>
                  {data?.dataSecurity?.owner_address?.slice(0, 6)}...
                  {data?.dataSecurity?.owner_address?.slice(
                    data?.dataSecurity?.owner_address.length - 3,
                    data?.dataSecurity?.owner_address.length
                  )}
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: "30px",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "#C0C0C0",
              }}
              elevation={5}
            >
              <Typography
                variant="h5"
                sx={{ padding: "55px", fontWeight: "bold", color: "#3d75ed" }}
              >
                Expe Token Scanner Score
              </Typography>
              <span>
                <Avatar
                  sx={{ padding: "65px", background: "rgb(59 130 246 / 0.5)" }}
                >
                  {data?.score}
                </Avatar>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ScannerTable data={data} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SecurityInfo data={data} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ScannerDetails;
