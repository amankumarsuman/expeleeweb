import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DescriptionIcon from "@mui/icons-material/Description";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SecurityIcon from "@mui/icons-material/Security";
import GavelIcon from "@mui/icons-material/Gavel";
export default function BlockChainAreaList() {
  return (
    <List
      sx={{
        width: "100%",
        width: "50vw",
        margin: "Auto",
        bgcolor: "grey",
        borderRadius: "20px",
        marginTop: "2em",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <AccountTreeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Blockchain infrastructure."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Platform-as-a-service (PaaS)
              </Typography>
              {
                "A blockchain infrastructure platform-as-a-service (PaaS) provider"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <Diversity2Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Blockchain and peer-to-peer transfers."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* to Scott, Alex, Jennifer */}
              </Typography>
              {/* {" — Wish I could come, but I'm out of town this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <CurrencyBitcoinIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Blockchain and digital currencies."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Sandra Adams */}
              </Typography>
              {/* {" — Do you have Paris recommendations? Have you ever…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <AddBusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Blockchain and marketplaces."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Sandra Adams */}
              </Typography>
              {/* {" — Do you have Paris recommendations? Have you ever…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <DescriptionIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Smart contracts."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Sandra Adams */}
              </Typography>
              {/* {" — Do you have Paris recommendations? Have you ever…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <AcUnitIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Innovation in blockchain."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Sandra Adams */}
              </Typography>
              {/* {" — Do you have Paris recommendations? Have you ever…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <SecurityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Privacy, Security and Identity in blockchain."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Sandra Adams */}
              </Typography>
              {/* {" — Do you have Paris recommendations? Have you ever…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ background: "black" }}>
            <GavelIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Blockchain and regulatory frameworks."
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* Sandra Adams */}
              </Typography>
              {/* {" — Do you have Paris recommendations? Have you ever…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
