/**
 *
 * @param ca == a contract address
 * @returns json data of contract
 */
const checkTax = async (ca) => {
  console.log("calculating");
  let data = await axios.get(
    "https://rsam-programmer.tech/api/v1/honeycheck/" + ca
  );
  return data.data;
};

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

const hideResulsts = () => {
  for (let j = 0; j < allresultsElements.length; j++) {
    console.log(allresultsElements[j]);
    let e = document.getElementById(allresultsElements[j]);
    e.style.display = "none";
  }
};

hideResulsts();

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
  let firstTimeStamp, finalTimeStamp;
  let contribs = 0;
  let biggestContrib = 0;
  let poolBalance = 0;
  let finalized = false;
  let currency;
  for (let i = 0; i < txs.length; i++) {
    const tx = txs[i];
    if (tx.functionName == "finalize()" && tx.isError == "0") {
      finalized = true;
      break;
    }
    if (
      (tx.functionName == "contribute()" || tx.methodId == "0x180e01c5") &&
      tx.isError == "0"
    ) {
      currency = tx.methodId == "0x180e01c5" ? "BUSD" : "BNB";
      contribs += 1;
      if (contribs == 1) {
        firstTimeStamp = parseInt(tx.timeStamp);
      }
      finalTimeStamp = parseInt(tx.timeStamp);
      const contribValue =
        tx.methodId == "0x180e01c5"
          ? parseFloat(
              ethers.utils.formatEther(
                "0x" + removePad(tx.input.substring(10, tx.input.length))
              )
            )
          : parseFloat(ethers.utils.formatEther(tx.value));
      poolBalance += contribValue;
      biggestContrib =
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
    fillTime: parseTime(finalTimeStamp - firstTimeStamp),
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

// const options = document.getElementById("options_menu");
// let currentOption = options.options[options.selectedIndex].value;
// options.addEventListener("change", (e) => {
//   hideResulsts();
//   currentOption = e.target.options[e.target.selectedIndex].value;
//   if (currentOption == "presaleScanner") {
//     document.getElementById("contractInput").innerText = "Put Presale Link:";
//   }
//   if (currentOption == "feeCalculator" || currentOption == "contractScanner") {
//     document.getElementById("contractInput").innerText =
//       "Put Contract Address:";
//   }
// });

// biggestContrib: 0
// collected: 0
// contribs: 0
// currency: undefined
// fillTime: "NaN:NaN:NaN"
// isFinalized: false

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const contractInput = document.getElementById("contract");
  const contract = contractInput.value;
  console.log(contract);
  if (
    currentOption == "feeCalculator" &&
    contract != "" &&
    contract.length == 42 &&
    contract.startsWith("0x")
  ) {
    document.getElementById("contractInput").innerText = "Put Contract Address";
    feeCalculator(contract);
  }
  if (currentOption == "presaleScanner") {
    document.getElementById("contractInput").innerText = "Put Presale Link:";
    const address = extractAddress(contract);
    if (address != "") {
      presaleScanner(address).then((r) => {
        console.log(r);
      });
    }
  }

  if (currentOption == "contractScanner") {
    document.getElementById("contractInput").innerText = "Put Contract Address";
    const contract = contractInput.value;
    if (contract != "" && contract.length == 42 && contract.startsWith("0x")) {
      axios.get("https://rsam-programmer.tech/check/" + contract).then((r) => {
        let { msg } = r.data;
        msg = msg.replace(/\n/g, "<br />");
        console.log(msg);
        document.getElementById("shortAudit").style.display = "block";
        document.getElementById("shortAudit").innerHTML = msg;
        console.log(r);
      });
    }
  }
});

console.log("Salam");
