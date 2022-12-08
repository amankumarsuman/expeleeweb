import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.tatum.io/v3/",
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "cross-origin", // include, *same-origin, omit
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json,text/plain",
    //"Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    // "Access-Control-Allow-Origin": "https://localhost:3000",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "X-Api-Key": "a5f1d20b-d4bd-4cca-a466-bdfeb90b1285",
  },
  // transformRequest: [
  //   function (data) {
  //     return `${JSON.stringify({...data,techsessionkey:localStorage.getItem("techSessionKey")}).replaceAll("+", "%2B")}`;
  //   },
  // ],
});
