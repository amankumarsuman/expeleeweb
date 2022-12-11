import React from "react";
import { Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import styles from "./generateToken.module.css";
import { ColorButton, SimpleButton } from "./CustomButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import TokenIcon from "@mui/icons-material/Token";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  Page,
  useDocumentTitle,
} from "../../../coreComponents/useDocumentTitle";
import { CssTextField } from "../../../coreComponents/CustomInputField";
function GenerateToken() {
  //initial state
  const initialState = {
    tokenName: "",
    tokenSymbol: "",
    supplyAmmount: "",
    devWalletAddrs: "",
    buyBurn: "",
    buyDev: "",
    buyLiquidity: "",
    sellBurn: "",
    sellDev: "",
    sellLiquidity: "",
  };

  //states
  const [input, setInput] = useState(initialState);
  const [formData, setFormData] = useState([]);

  //function to get  value of input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //function to handle onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, input]);
  };

  //console to show the data
  console.log(formData);

  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  //dynamic title show
  useDocumentTitle("GenerateToken-Expelee");
  return (
    <div style={{ padding: "1em", marginTop: "2em" }}>
      <FormMainHeadingContainer
        headingText="Generate Token"
        headingIcon=""
      >
        <form onSubmit={handleSubmit}>
          <Paper
            elevation={5}
            sx={{
              width: "100%",
              margin: "auto",
              padding: "2em",
              background:"transparent"
            }}
            className={styles.bodyBackground}
          >
            <Grid container spacing={2} sx={{ marginTop: "2%" }}>
              <Grid item xs={12} md={4}>
                <h1 className={styles.heading}>Token</h1>
                <Typography>
                  This information will be used to identify your Token Publily
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper sx={{background:"#C0C0C0"}} elevation={5}>
                  <div className={styles.textFieldDiv}>
                    <CssTextField
                      label="TOKEN NAME[eg:ETHEREUM,BITCOIN]"
                      className={styles.textField}
                      fullWidth
                      onChange={handleChange}
                      value={input.tokenName}
                      variant="outlined"
                      name="tokenName"
                    />

                    <CssTextField
                      className={styles.textField}
                      label="TOKEN SYMBOL[eg:ETH,BTC]"
                      fullWidth
                      onChange={handleChange}
                      value={input.tokenSymbol}
                      variant="outlined"
                      name="tokenSymbol"
                    />

                    <CssTextField
                      className={styles.textField}
                      label="ENTER SUPPLY AMOUNT"
                      fullWidth
                      onChange={handleChange}
                      name="supplyAmmount"
                      value={input.supplyAmmount}
                      variant="outlined"
                    />

                    <CssTextField
                      className={styles.textField}
                      label="ENTER DEV WALLET ADDRESS"
                      fullWidth
                      onChange={handleChange}
                      name="devWalletAddrs"
                      value={input.devWalletAddrs}
                      variant="outlined"
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Divider className={styles.divider} />
            <Grid container spacing={2} sx={{ marginTop: "2%", }}>
              <Grid item xs={12} md={4}>
                <h1 className={styles.heading}>Buy Taxes</h1>
                <Typography>
                  provide buy tax rates across in range of 0 to 10%
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper
                  elevation={5}
                  sx={{
                    paddingBottom: "2em",
                    paddingTop: "2em",
                    background:"#C0C0C0"
                  }}
                >
                  <div className={styles.textFieldDiv}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <CssTextField
                          label="Burn"
                          placeholder="0 to 10%"
                          className={styles.textField}
                          fullWidth
                          onChange={handleChange}
                          name="buyBurn"
                          variant="outlined"
                          value={input.buyBurn}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <CssTextField
                          label="Dev"
                          placeholder="0 to 10%"
                          className={styles.textField}
                          fullWidth
                          onChange={handleChange}
                          name="buyDev"
                          value={input.buyDev}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <CssTextField
                          label="Liquidity"
                          placeholder="0 to 10%"
                          className={styles.textField}
                          fullWidth
                          onChange={handleChange}
                          name="buyLiquidity"
                          value={input.buyLiquidity}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Divider className={styles.divider} />

            <Grid container spacing={2} sx={{ marginTop: "2%" }}>
              <Grid item xs={12} md={4}>
                <h1 className={styles.heading}>Sell Taxes</h1>
                <Typography>
                  provide sell tax rates across in range of 0 to 10%
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper
                  elevation={5}
                  sx={{
                    paddingBottom: "2em",
                    paddingTop: "2em",
                    background:"#C0C0C0"
                  }}
                >
                  <div className={styles.textFieldDiv}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <CssTextField
                          label="Burn"
                          placeholder="0 to 10%"
                          className={styles.textField}
                          fullWidth
                          onChange={handleChange}
                          name="sellBurn"
                          value={input.sellBurn}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <CssTextField
                          label="Dev"
                          placeholder="0 to 10%"
                          className={styles.textField}
                          fullWidth
                          onChange={handleChange}
                          name="sellDev"
                          value={input.sellDev}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <CssTextField
                          label="Liquidity"
                          placeholder="0 to 10%"
                          className={styles.textField}
                          fullWidth
                          onChange={handleChange}
                          name="sellLiquidity"
                          value={input.sellLiquidity}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    
            <SimpleButton
              onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "200px",

                padding: "1.2em",
                // fontFamily: "poppins",
                color: "white",
                // fontSize: "15px",
                fontSize: "1em",
                fontWeight: "bold",
                background: "#3d75ed",
              }}
              variant="contained"
            >
              Generate
            </SimpleButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </FormMainHeadingContainer>
    </div>
  );
}

export default GenerateToken;
