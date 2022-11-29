import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  imageListClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { UseDocumentTitle } from "../../../customComponents/useTitle/UseDocumentTitle";
import styles from "./scanner.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { ethers } from "ethers";
import ScannerDataTable from "./ScannerDataTable";
function Scanner() {
  let allresultsElements = [
    "tokenName",
    "pairName",
    "buyTax",
    "sellTax",
    "buyGas",
    "sellGas",
    "biggestContrib",
    "collected",
    "contribs",
    "currency",
    "fillTime",
    "isFinalized",
    "shortAudit",
  ];
  //dynamic title show
  UseDocumentTitle("Expelee-Scanner");
  const init = {
    scannerType: "contractcheck",
    contract: "",
  };
  const [scannerType, setScannerType] = React.useState("");
  const [inputLabel, setInputLabel] = useState("Contract Address");
  const [contract, setContract] = useState("");
  const [data, setData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);


  // let firstTimeStamp, finalTimeStamp;
  // let contribs = 0;
  // let biggestContrib = 0;
  // let poolBalance = 0;
  // let finalized = false;
  // let currency;

  const [firstTimeStamp,setFirstTimeStamp]=useState(null)
  const [contribs,setContribs]=useState(0)
  const [biggestContrib,setBiggestContrib]=useState(0)
  const [poolBalance,setPoolBalance]=useState(0)
  const [finalized,setFinalized]=useState(false)
  const [currency,setCurrency]=useState(null)
  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    setContract(event.target.value);
  };
  const handleTypeChange = (event) => {
    // const { name, value } = event.target;
    setScannerType(event.target.value);
    if (event.target.value === "presaleScanner") {
      const input = "Presale Link";
      setInputLabel(input);
    }
    if (
      event.target.value === "feeCalculator" ||
      event.target.value === "contractScanner"
    ) {
      const input = "Contract Address";
      setInputLabel(input);
    }
  };
  // const checkTax = async (ca) => {
  //   console.log("calculating");
  //   let data = await axios.get(
  //     "https://rsam-programmer.tech/api/v1/honeycheck/" + ca
  //   );
  //   return data.data;
  // };
  // const hideResulsts = () => {
  //   for (let j = 0; j < allresultsElements.length; j++) {
  //     console.log(allresultsElements[j]);
  //     let e = document.getElementById(allresultsElements[j]);
  //     // e.style.display = "none";
  //   }
  // };

  // hideResulsts();

  // const feeCalculator = (contract) => {
  //   checkTax(contract).then((r) => {
  //     let result_elements = ["hp", "nl", "cb"];
  //     let cbElements = [
  //       "tokenName",
  //       "pairName",
  //       "buyTax",
  //       "sellTax",
  //       "buyGas",
  //       "sellGas",
  //     ];
  //     for (let i = 0; i < result_elements.length; i++) {
  //       let result = result_elements[i];
  //       if (r.type == result) {
  //         document.getElementById(result).style.display = "flex";
  //         for (let j = 0; j < cbElements.length; j++) {
  //           let ce = document.getElementById(cbElements[j]);
  //           ce.style.display = "flex";
  //           ce.innerText = ce.innerText + r[cbElements[j]];
  //         }
  //       }
  //     }
  //   });
  // };

  // const removePad = (value) => {
  //   let j = 0;
  //   for (let i = 0; i < value.length; i++) {
  //     if (value.charAt(i) != "0") {
  //       j = i;
  //       break;
  //     }
  //   }
  //   return value.substring(j, value.length);
  // };

  // const extractAddress = (str) => {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.charAt(i) == "0" && str.charAt(i + 1) == "x") {
  //       return str.substring(i, i + 42);
  //     }
  //   }
  //   return "";
  // };

  // const parseTime = (t) => {
  //   let sec_num = parseInt(t, 10); // don't forget the second param
  //   let hours = Math.floor(sec_num / 3600);
  //   let minutes = Math.floor((sec_num - hours * 3600) / 60);
  //   let seconds = sec_num - hours * 3600 - minutes * 60;

  //   if (hours < 10) {
  //     hours = "0" + hours;
  //   }
  //   if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }
  //   if (seconds < 10) {
  //     seconds = "0" + seconds;
  //   }
  //   return hours + ":" + minutes + ":" + seconds;
  // };

  // const presaleScanner = async (presale) => {
  //   console.log("Scanning");
  //   const apiKey = "BT62BRS5ZYPCPVMR23RH6VPVZG9646JWJG";
  //   let txs = (
  //     await axios.get(
  //       "https://api.bscscan.com/api?module=account&action=txlist&address=" +
  //         presale +
  //         "&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=" +
  //         apiKey
  //     )
  //   ).data.result;
  //   let firstTimeStamp, finalTimeStamp;
  //   let contribs = 0;
  //   let biggestContrib = 0;
  //   let poolBalance = 0;
  //   let finalized = false;
  //   let currency;
  //   for (let i = 0; i < txs.length; i++) {
  //     const tx = txs[i];
  //     if (tx.functionName == "finalize()" && tx.isError == "0") {
  //       finalized = true;
  //       break;
  //     }
  //     if (
  //       (tx.functionName == "contribute()" || tx.methodId == "0x180e01c5") &&
  //       tx.isError == "0"
  //     ) {
  //       currency = tx.methodId == "0x180e01c5" ? "BUSD" : "BNB";
  //       contribs += 1;
  //       if (contribs == 1) {
  //         firstTimeStamp = parseInt(tx.timeStamp);
  //       }
  //       finalTimeStamp = parseInt(tx.timeStamp);
  //       const contribValue =
  //         tx.methodId == "0x180e01c5"
  //           ? parseFloat(
  //               ethers.utils.formatEther(
  //                 "0x" + removePad(tx.input.substring(10, tx.input.length))
  //               )
  //             )
  //           : parseFloat(ethers.utils.formatEther(tx.value));
  //       poolBalance += contribValue;
  //       biggestContrib =
  //         contribValue > biggestContrib ? contribValue : biggestContrib;
  //     }
  //   }
  //   const presaleElements = [
  //     "biggestContrib",
  //     "collected",
  //     "contribs",
  //     "currency",
  //     "fillTime",
  //     "isFinalized",
  //   ];
  //   let r = {
  //     fillTime: parseTime(finalTimeStamp - firstTimeStamp),
  //     contribs,
  //     biggestContrib,
  //     isFinalized: finalized,
  //     collected: poolBalance,
  //     currency,
  //   };
  //   for (let i = 0; i < presaleElements.length; i++) {
  //     console.log(presaleElements[i]);
  //     let pe = document.getElementById(presaleElements[i]);
  //     pe.style.display = "flex";
  //     pe.innerText = pe.innerText + r[presaleElements[i]];
  //   }
  // };

  const checkTax = async (ca) => {
    console.log("calculating");
    let data = await axios.get(
      "https://rsam-programmer.tech/api/v1/honeycheck/" + ca
    );
    return data.data;
  };

  const feeCalculator = (contract) => {
    checkTax(contract).then((r) => {
      let result_elements = ["hp", "nl", "cb"];
      let cbElements = [
        "tokenName",
        "pairName",
        "buyTax",
        "sellTax",
        "buyGas",
        "sellGas",
      ];
      for (let i = 0; i < result_elements.length; i++) {
        let result = result_elements[i];
        if (r.type == result) {
          document.getElementById(result).style.display = "flex";
          for (let j = 0; j < cbElements.length; j++) {
            let ce = document.getElementById(cbElements[j]);
            ce.style.display = "flex";
            ce.innerText = ce.innerText + r[cbElements[j]];
          }
        }
      }
    });
  };

  const removePad = (value) => {
    let j = 0;
    for (let i = 0; i < value.length; i++) {
      if (value.charAt(i) != "0") {
        j = i;
        break;
      }
    }
    return value.substring(j, value.length);
  };

  const extractAddress = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "0" && str.charAt(i + 1) == "x") {
        return str.substring(i, i + 42);
      }
    }
    return "";
  };

  const parseTime = (t) => {
    let sec_num = parseInt(t, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  const presaleScanner = async (presale) => {
    console.log("Scanning");
    const apiKey = "BT62BRS5ZYPCPVMR23RH6VPVZG9646JWJG";
    let txs = (
      await axios.get(
        "https://api.bscscan.com/api?module=account&action=txlist&address=" +
          presale +
          "&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=" +
          apiKey
      )
    ).data.result;
    console.log(txs, "txs");
    setTransactionData(txs);
    let firstTimeStamp, finalTimeStamp;
    let contribs = 0;
    let biggestContrib = 0;
    let poolBalance = 0;
    let finalized = false;
    let currency;
    for (let i = 0; i < txs.length; i++) {
      const tx = txs[i];
      if (tx.functionName == "finalize()" && tx.isError == "0") {
        setFinalized = true;
        break;
      }
      if (
        (tx.functionName == "contribute()" || tx.methodId == "0x180e01c5") &&
        tx.isError == "0"
      ) {
        currency = tx.methodId == "0x180e01c5" ? "BUSD" : "BNB";
        contribs += 1;
        if (contribs == 1) {
          setFirstTimeStamp = parseInt(Number(tx.timeStamp));
        }
        finalTimeStamp = parseInt(Number(tx.timeStamp));
        const contribValue =
          tx.methodId == "0x180e01c5"
            ? parseFloat(
                ethers.utils.formatEther(
                  "0x" + removePad(tx.input.substring(10, tx.input.length))
                )
              )
            : parseFloat(ethers.utils.formatEther(tx.value));
        setPoolBalance += contribValue;
        setBiggestContrib =
          contribValue > biggestContrib ? contribValue : biggestContrib;
      }
    }
    const presaleElements = [
      "biggestContrib",
      "collected",
      "contribs",
      "currency",
      "fillTime",
      "isFinalized",
    ];
    let r = {
      fillTime: parseTime(Number(firstTimeStamp)),
      contribs,
      biggestContrib,
      isFinalized: finalized,
      collected: poolBalance,
      currency,
    };
    for (let i = 0; i < presaleElements.length; i++) {
      console.log(presaleElements[i]);
      let pe = document.getElementById(presaleElements[i]);
      pe.style.display = "flex";
      pe.innerText = pe.innerText + r[presaleElements[i]];
    }
  };
  const handleSubmit = () => {
    if (
      scannerType == "feeCalculator" &&
      contract != "" &&
      contract.length == 42 &&
      contract.startsWith("0x")
    ) {
      const input = "Contract Address";
      setInputLabel(input);
      feeCalculator(contract);
    }

    if (scannerType == "presaleScanner") {
      const input = "Presale Link";
      setInputLabel(input);
      const address = extractAddress(contract);
      if (address != "") {
        presaleScanner(address).then((r) => {
          console.log(r);
        });
      }
    }

    if (scannerType == "contractScanner") {
      const input = "Contract Address";
      setInputLabel(input);
      if (
        contract != "" &&
        contract.length == 42 &&
        contract.startsWith("0x")
      ) {
        axios
          .get("https://rsam-programmer.tech/check/" + contract)
          .then((r) => {
            console.log(r.message);
            let { msg } = r.data;

            msg = msg.replace(/\n/g, "<br />");
            console.log(msg);
            document.getElementById("shortAudit").style.display = "block";
            document.getElementById("shortAudit").innerHTML = msg;
            console.log(r);
          });
      }
    }
    // setData([...data, input]);
    // if (
    //   input?.scannerType === "feeCalculator" &&
    //   input?.contract != "" &&
    //   input?.contract?.length == 42 &&
    //   input?.contract?.startsWith("0x")
    // ) {
    //   alert("Please Pul Contract Address");
    //   feeCalculator(input?.contract);
    // }
    // if (input?.scannerType === "presaleScanner") {
    //   alert("Enter Presale Link");
    //   const address = extractAddress(input?.contract);
    //   if (address != "") {
    //     presaleScanner(address).then((r) => {
    //       console.log(r);
    //     });
    //   }
    // }
    // if (input?.scannerType == "contractScanner") {
    //   alert("Put Contract Address");
    //   if (
    //     input?.contract != "" &&
    //     input?.contract.length == 42 &&
    //     input?.contract.startsWith("0x")
    //   ) {
    //     axios
    //       .get("https://rsam-programmer.tech/check/" + input?.contract)
    //       .then((r) => {
    //         let { msg } = r.data;
    //         msg = msg.replace(/\n/g, "<br />");
    //         console.log(msg);
    //         document.getElementById("shortAudit").style.display = "block";
    //         document.getElementById("shortAudit").innerHTML = msg;
    //         console.log(r);
    //       });
    //   }
    // }
  };
  console.log(scannerType);
  console.log(contract);
  console.log(data, "data");
  useEffect(() => {
    axios
      .get(
        "https://rsam-programmer.tech/check/0x5Ce8e55E256e4bd58ceA94963d4cB280dE6b8Bb2"
      )
      .then((r) => {
        console.log(r);
      });
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        <Paper elevation={5} className={styles.PaperDiv}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              className={styles.textGradient}
              // fontFamily="poppins"
              textAlign="center"
              padding="1em"
            >
              Expe Scanner
            </Typography>
          </Grid>
        </Paper>
        <Grid
          sx={{ background: "white", textAlign: "center", padding: "0.6em" }}
          item
          xs={12}
          md={4}
        >
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Scanner Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              name="scannerType"
              value={scannerType}
              onChange={handleTypeChange}
              autoWidth
              label="Scanner Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"contractScanner"}>Contract Checker</MenuItem>
              <MenuItem value={"feeCalculator"}>
                Buy/Sell Fee Calculator
              </MenuItem>
              <MenuItem value={"presaleScanner"}>
                Presale Scanner (Pinksale)
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          sx={{ background: "white", textAlign: "center", padding: "0.6em" }}
          item
          xs={12}
          md={4}
        >
          <label id="contractInput">{`Put ${inputLabel}`}</label>
          <br />
          <TextField
            label={inputLabel}
            name="contract"
            placeholder={`Enter ${inputLabel}`}
            onChange={handleInputChange}
            value={contract}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button onClick={handleSubmit} variant="contained">
            submit
          </Button>
        </Grid>
      </Grid>

      <div>
        <br />
        <span>Results Are Shown Here:</span>
        <div
          id="results"
          style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}
        >
          <span id="hp" style={{ color: "red", display: "none" }}>
            Honeypot! Stay Away!
          </span>
          <span id="nl" style={{ color: "orange", display: "none" }}>
            Token is not launched yet, or is not on binance smart chain!
          </span>
          <div id="cb" style={{ color: "green", display: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <span id="tokenName">Name:</span>
              <span id="pairName">Pair:</span>
              <span id="buyTax">Buy Tax: </span>
              <span id="sellTax">Sell Tax: </span>
              <span id="buyGas">Buy Gas: </span>
              <span id="sellGas">Sell Gas: </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span id="fillTime">Fill Time: </span>
            <span id="currency">Used Currency: </span>
            <span id="contribs">Total Contributions:</span>
            <span id="biggestContrib">Biggest Contribution:</span>
            <span id="isFinalized">Presale Finalized: </span>
            <span id="collected">Total Collected:</span>
          </div>
          <div className="audit-result" id="shortAudit"></div>
        </div>
      </div>
      <div id="shortAudit"></div>

      <ScannerDataTable data={transactionData} />
    </div>
  );
}

export default Scanner;
