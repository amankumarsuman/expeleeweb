import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
// import { CssTextField } from "../../../coreComponents/CustomInputField";
import { StyledActionTableCell } from "../../../customComponents/tableStyle/tableComponent";
import styles from "./scanner.module.css";
import ScannerDetails from "./ScannerDetails";
import WarningIcon from "@mui/icons-material/Warning";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";
import { ProgressWithLabel } from "../../../coreComponents/ProgressWithLabel";
import { ScannerTextField } from "../../../coreComponents/CustomInputField";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ScannerComponent() {
  const init = {
    address: "",
    chainid: "",
  };
  const [input, setInput] = useState(init);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };
  const [data, setData] = useState([init]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    // await axios
    //   .get(
    //     `https://api-scanner.blocksafu.com/scan?address=${input?.address}&chainid=${input?.chainid}`
    //   )
    //   .then((res) => {
    //     setIsLoading(true);
    //     setData(res?.data);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     setIsErr(err);
    //     setOpen(true);
    //     setIsLoading(false)
    //   });

    const api_key =
      "71gnO93jUr6531AFIFZgp9v4HqTF6RU8dYJXsSHm9wj8yQMWcl9rYgj8oq3riEwy";
    const options = {
      method: "GET",
      url: `https://deep-index.moralis.io/api/v2/${input?.address}/nft`,
      params: { chain: "eth", format: "decimal", normalizeMetadata: "false" },
      headers: { accept: "application/json", "X-API-Key": api_key },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setIsLoading(true);
        setData(response?.data?.result[0]);
        console.log(response);
      })
      .catch(function (error) {
        setIsErr(error);
        setOpen(true);
        setIsLoading(false);
      });

    // getTokenDetails
  };
  console.log(data, "data");
  return (
    <>
      <Grid sx={{ width: "95%", margin: "auto" }} container spacing={2}>
        <Paper elevation={5} className={styles.PaperDiv}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              className={styles.textGradient}
              // fontFamily="poppins"
              fontWeight="bold"
              textAlign="center"
              padding="1em"
            >
              Expe Scanner
            </Typography>
          </Grid>
        </Paper>

        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: "3em",
              display: "flex",
              justifyContent: "space-between",
            }}
            elevation={5}
          >
            <ScannerTextField
              label="Enter Address"
              // className={styles.textField}
              sx={{ paddingRight: "0px !important" }}
              fullWidth
              onChange={handleChange}
              value={input.address}
              variant="outlined"
              name="address"
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={handleSubmit}
                    sx={{
                      // paddingRight: "0px !important",
                      width: "200px",
                      padding: "0.8em",
                      // fontFamily: "poppins",
                      color: "white",
                      // fontSize: "15px",
                      fontSize: "1em",
                      fontWeight: "bold",
                      background: "#3d75ed",
                      borderRadius: "15px 10px 10px 15px",
                      border: "1px solid blue",
                    }}
                    variant="contained"
                  >
                    See Details
                  </Button>
                ),
              }}
            />
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={3}> */}
        {/* <Paper sx={{  padding: "3em" }} elevation={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Network
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={input?.chainid}
                  label="Select Network"
                  name="chainid"
                  onChange={handleChange}
                >
                  <MenuItem value={56}>BSC</MenuItem>
                  <MenuItem value={1}>Etereum</MenuItem>
                  <MenuItem value={25}>Cronos</MenuItem>

                  <MenuItem value={137}>Polygon</MenuItem>
                  <MenuItem value={250}>Fantom</MenuItem>

                  <MenuItem value={42161}>Arbitrum</MenuItem>
                  <MenuItem value={43114}>Avalanche</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} md={2}> */}
          {/* <Paper
            sx={{ background: "transparent", padding: "3em" }}
            elevation={5}
          > */}
          {/* <Button
              onClick={handleSubmit}
              sx={{ padding: "1em", width: "150px" }}
              variant="contained"
            >
              submit
            </Button> */}

          {/* <SimpleButton
            onClick={handleSubmit}
            sx={{
              width: "200px",
              padding: "1.5em",
              // fontFamily: "poppins",
              color: "white",
              // fontSize: "15px",
              fontSize: "1em",
              fontWeight: "bold",
              background: "#3d75ed",
            }}
            variant="contained"
          >
            See Details
          </SimpleButton> */}
          {/* </Paper> */}
        {/* </Grid> */}
        <Grid item xs={12} md={2}></Grid>
      </Grid>
      {isLoading ? (
        <ScannerDetails data={data} />
      ) : isErr ? (
        <>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle sx={{ textAlign: "center" }}>
              {"Oops Something Went Wrong"}
            </DialogTitle>
            <div style={{ textAlign: "center" }}>
              <WarningIcon />
            </div>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please Choose correct Network and Add correct Address.Either
                your address or your network is incorrect
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  background: "#C0C0C0",
                  border: "1px solid grey",
                  color: "black",
                }}
                onClick={handleClose}
              >
                Disagree
              </Button>
              <Button
                sx={{ background: "blue", color: "white" }}
                variant="contained"
                onClick={handleClose}
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : null}
      {/* 
      {isLoading? <ProgressWithLabel/>:isErr?
     <Dialog
     open={open}
     TransitionComponent={Transition}
     keepMounted
     onClose={handleClose}
     aria-describedby="alert-dialog-slide-description"
   >
     <DialogTitle sx={{ textAlign: "center" }}>
       {"Oops Something Went Wrong"}
     </DialogTitle>
     <div style={{ textAlign: "center" }}>
       <WarningIcon />
     </div>
     <DialogContent>
       <DialogContentText id="alert-dialog-slide-description">
         Please Choose correct Network and Add correct Address.Either
         your address or your network is incorrect
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button
         sx={{
           background: "#C0C0C0",
           border: "1px solid grey",
           color: "black",
         }}
         onClick={handleClose}
       >
         Disagree
       </Button>
       <Button
         sx={{ background: "blue", color: "white" }}
         variant="contained"
         onClick={handleClose}
       >
         Agree
       </Button>
     </DialogActions>
   </Dialog>:  <ScannerDetails data={data} />
    } */}
    </>
  );
}

export default ScannerComponent;
