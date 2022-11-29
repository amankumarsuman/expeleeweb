import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { ScrollToChangeNavbarColor } from "../coreComponents/themeStyle";
import logo from "../assets/ExpeleeLogoLight.png";
import { Grid } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { ConnectWalletBtn } from "../pages/services/tokenGeneration/CustomButton";
import { AnimatedMenu } from "../customComponents/animatedMenu/MainComponent";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import NavLinks from "./NavLinks";
const pages = ["PRODUCTS", "SERVICES", "COMPANY", "CONTACT"];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function Navbar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [connectedWalletAddress, setConnectedWalletAddress] = React.useState(
    []
  );

  //function to connect wallet
  const connect = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        // Return the address of the wallet
        //setting address of wallet to the state
        setConnectedWalletAddress(res);
      });
    } else {
      alert("install metamask extension!!");
    }
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ScrollToChangeNavbarColor>
      <AppBar color="transparent" position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 10,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                // marginLeft: "3em",
                marginRight: "10em",
                color: "white",
                // border:"1px solid red",
                marginLeft:-30,
              }}
            >
              <img src={logo} alt="logo" width="40%" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <AnimatedMenu />
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              > */}
              {/* </IconButton> */}
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Tooltip
                    placement="right-end"
                    className={styles.linkDecoration}
                    title={page}
                  >
                    <Link to="/tokenGenerate">
                      <MenuItem
                        key={page}
                        style={{ color: "black" }}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  </Tooltip>
                ))}
              </Menu> */}
              <Grid container>
                <Grid sx={{ marginTop: "0.5em" }} item xs={6} md={6}>
                  <Link to="/">
                    <img src={logo} alt="logo" width="30%" />
                  </Link>
                </Grid>
                <Grid sx={{ textAlign: "end" }} item xs={6} md={4}>
                  {/* <Tooltip title="CONNECT WALLET">
                    <Button
                      sx={{
                        padding: "8%",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      variant="contained"
                      onClick={connect}
                    >
                      {connectedWalletAddress.length > 0
                        ? "CONNECTED"
                        : "CONNECT WALLET"}
                    </Button>
                  </Tooltip> */}
                  {/* <AnimatedMenu /> */}
                </Grid>
              </Grid>
            </Box>
           

            <Box
              sx={{
                flexGrow: 2,

                display: {
                  xs: "none",
                  md: "flex",
                  // justifyContent: "space-between",
                  // border: "1px solid red",

                  marginLeft: "18em",
                },
              }}
            >
              {/* {pages.map((page) => (
                <Tooltip className={styles.linkDecoration} title={page}>
                  <Link to="/tokenGenerate">
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        ml: 5,
                        color: "white",
                        display: "block",
                        // fontWeight: "bold",
                        fontFamily: "Teko",
                        width: "100%",
                        fontSize: "1em",
                      }}
                    >
                      {page}s
                    </Button>
                  </Link>
                </Tooltip>
              ))} */}
            </Box>
            <div style={{ marginLeft: "5em" }}>{/* <Brightness7Icon /> */}</div>
            <Box
              sx={{
                flexGrow: 0,

                justifyContent: "start",
                display: { xs: "none", md: "flex" },
                width: "100vw",
                marginLeft:"10em",
                textAlign: "end",
                
              }}
            >
               <NavLinks />
              {/* <Tooltip title="CONNECT WALLET">
                <ConnectWalletBtn
                  onClick={connect}
                  variant="contained"
                  sx={{ padding: "1em" }}
                >
                  <span className={styles.saveText}>
                    {" "}
                    {connectedWalletAddress.length > 0
                      ? "CONNECTED"
                      : "CONNECT WALLET"}
                  </span>
                  <span className={styles.saveBtn}>
                    <AccountBalanceWalletIcon className={styles.telegramIcon} />
                  </span>
                </ConnectWalletBtn>
              </Tooltip> */}
            </Box>
          </Toolbar>
          {/* <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
            }}
          >
            {theme.palette.mode} mode
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box> */}
        </Container>
      </AppBar>
    </ScrollToChangeNavbarColor>
  );
}
export default Navbar;
