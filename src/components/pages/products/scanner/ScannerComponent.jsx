import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { CssTextField } from "../../../coreComponents/CustomInputField";
import { StyledActionTableCell } from "../../../customComponents/tableStyle/tableComponent";
import styles from "./scanner.module.css";
import ScannerDetails from "./ScannerDetails";

function ScannerComponent() {
  const init = {
    address: "",
    chainid: "",
  };
  const [input, setInput] = useState(init);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };
  const [data, setData] = useState([init]);
  const handleSubmit = () => {
    axios
      .get(
        `https://api-scanner.blocksafu.com/scan?address=${input?.address}&chainid=${input?.chainid}`
      )
      .then((res) => {
        setIsLoading(true);
        setData(res?.data);
      });
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

        <Grid item xs={12} md={8}>
          <Paper sx={{ background: "#C0C0C0", padding: "3em" }} elevation={5}>
            <CssTextField
              label="Enter Address"
              className={styles.textField}
              fullWidth
              onChange={handleChange}
              value={input.address}
              variant="outlined"
              name="address"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper sx={{ background: "#C0C0C0", padding: "3em" }} elevation={5}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper
            sx={{ background: "transparent", padding: "3em" }}
            elevation={5}
          >
            <Button
              onClick={handleSubmit}
              sx={{ padding: "1em", width: "200px" }}
              variant="contained"
            >
              submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
      {isLoading ? <ScannerDetails data={data} /> : null}
    </>
  );
}

export default ScannerComponent;