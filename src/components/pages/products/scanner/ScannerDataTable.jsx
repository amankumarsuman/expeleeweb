import {
  Button,
  FormControlLabel,
  Grid,
  ListItemIcon,
  MenuItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { CustomButton } from "../customComponents/CustomButton";
// import { LoadingTable } from "../customComponents/LoadingContainer";
import {
  LeftSearchDiv,
  LoadingContainer,
  MainContainerDiv,
  PaperDiv,
  RightTableDiv,
  StyledPaginationDiv,
  StyledTableCell,
  StyledTableRow,
  StyledTextField,
  TableContainerDiv,
  TextFieldMainDiv,
} from "../../../customComponents/tableStyle/tableComponent";

import CachedIcon from "@mui/icons-material/Cached";

import styles from "./tableStyle.module.css";
import { scannerTablColumn } from "./scannerTableColumn.js";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getIndividualRecord, sendCapsuleDataToStore } from "../redux/actions";
// import { Usekey } from "../customComponents/KeyBoard";
// import CustomizedDialogs from "../popupDialogue/PopupDialogue";

function ScannerDataTable({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [dense, setDense] = useState(false);
  //   const [data, setData] = useState([]);

  //   const dispatch = useDispatch();
  //   const { tableData } = useSelector((state) => state?.capsuleTable);

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const init = {
    status: "",
    search: "",
    original_launch: "",
  };
  const [searchValues, setSearchValues] = React.useState(init);
  //fetching data from API
  //   const getCapsuleTableData = () => {
  //     axios
  //       .get("https://api.spacexdata.com/v3/capsules")
  //       .then((res) => setData(res?.data));
  //     dispatch(sendCapsuleDataToStore(data));
  //   };
  //   useEffect(() => {
  //     getCapsuleTableData();
  //     return () => {};
  //   }, []);

  const handleSearchCapsuleRecord = () => {
    console.log(searchValues, "searchValues");
    // if (searchValues?.status) {
    //   const filterData = data.filter((el) =>
    //     el.status.toLowerCase().includes(searchValues?.status?.toLowerCase())
    //   );
    //   setData(filterData);
    // } else if (searchValues?.type) {
    //   const filterData = data.filter((el) =>
    //     el.type.toLowerCase().includes(searchValues?.type?.toLowerCase())
    //   );
    //   setData(filterData);
    // } else if (searchValues?.original_launch) {
    //   const filterData = data.filter((el) =>
    //     el.original_launch
    //       .toLowerCase()
    //       .includes(searchValues?.original_launch?.toLowerCase())
    //   );
    //   setData(filterData);
    // }
  };

  //for keyboard interaction
  //   Usekey("Enter", handleSearchCapsuleRecord);
  //   Usekey("NumpadEnter", handleSearchCapsuleRecord);

  const handleSearchKeys = (e) => {
    const { name, value } = e.target;
    if (name === "status") {
      setSearchValues({ status: value });
    } else if (name === "type") {
      setSearchValues({ type: value });
    } else if (name === "original_launch") {
      setSearchValues({ original_launch: value });
    }
  };

  //reset
  const handleReset = () => {
    setSearchValues({
      status: "",
      type: "",
      original_launch: "",
    });
    handleRefresh();
  };
  //refres
  const handleRefresh = () => {
    // getCapsuleTableData();
    handleReset();
  };

  //function to get individual record
  const handleIndividualRecord = (row) => {
    // alert(row);
    // dispatch(getIndividualRecord(row));
    setOpen(true);
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
  return (
    <>
      <MainContainerDiv>
        {/* <LeftSearchDiv>
          <TextFieldMainDiv>
            <Grid sx={{ marginTop: "1em" }} container spacing={3}>
              <Grid item xs={12}></Grid>

              <Grid item xs={12}>
                <StyledTextField
                  value={searchValues?.status || ""}
                  onChange={handleSearchKeys}
                  name="status"
                  label="Search By Status"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  value={searchValues?.type || ""}
                  onChange={handleSearchKeys}
                  name="type"
                  label="Search By Type"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  value={searchValues?.original_launch || ""}
                  onChange={handleSearchKeys}
                  name="original_launch"
                  label="Search By Original Launch"
                  fullWidth
                />
              </Grid>
              <Grid
                container
                direction="column"
                spacing={10}
                justifyContent="space-around"
                alignItems="stretch"
                sx={{ width: "70%", margin: "auto", minHeight: "100px" }}
              >
                <Button onClick={handleSearchCapsuleRecord} variant="contained">
                  Search
                </Button>
                <Button onClick={handleReset} variant="contained">
                  Reset
                </Button>
              </Grid>
            </Grid>
          </TextFieldMainDiv>
        </LeftSearchDiv> */}
        <>
          <RightTableDiv>
            {isLoading ? (
              //   <LoadingTable />
              <div>Loading.....</div>
            ) : (
              <PaperDiv>
                <TableContainerDiv>
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    size={dense ? "small" : "medium"}
                  >
                    <TableHead>
                      <TableRow>
                        {scannerTablColumn.map((item, i) => (
                          <StyledTableCell key={i}>
                            {item.label}
                          </StyledTableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {isLoading && data?.length === 0 ? (
                        <StyledTableRow>
                          <TableCell>
                            <LoadingContainer
                              className={styles.loadingContainer}
                            >
                              Loading....
                            </LoadingContainer>
                          </TableCell>
                        </StyledTableRow>
                      ) : data?.length >= 1 ? (
                        data
                          ?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, i) => {
                            return (
                              <StyledTableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                                onClick={() => handleIndividualRecord(row)}
                              >
                                <TableCell>{row.blockNumber}</TableCell>
                                <TableCell>{row.confirmations}</TableCell>

                                <TableCell>{row.cumulativeGasUsed}</TableCell>
                                <TableCell>{row.methodId}</TableCell>
                                <TableCell>
                                  {parseTime(row.timeStamp)}
                                </TableCell>
                                <TableCell>{row.gasUsed}</TableCell>
                              </StyledTableRow>
                            );
                          })
                      ) : (
                        <StyledTableRow
                          hover
                          tabIndex={-1}
                          style={{ border: "1px solid red" }}
                        >
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            {searchValues?.status !== ""
                              ? "No data found for this status"
                              : searchValues?.original_launch !== ""
                              ? "No data found for this Original Launch"
                              : searchValues?.type !== ""
                              ? "No data found for this type"
                              : "No data found"}
                          </TableCell>
                          <TableCell></TableCell>

                          <TableCell>
                            <MenuItem>
                              <ListItemIcon onClick={handleRefresh}>
                                <CachedIcon />
                              </ListItemIcon>
                              Reset
                            </MenuItem>
                          </TableCell>
                        </StyledTableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainerDiv>

                <StyledPaginationDiv>
                  <FormControlLabel
                    control={
                      <Switch checked={dense} onChange={handleChangeDense} />
                    }
                    label="Denser"
                  />
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data?.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    page={page}
                  />
                </StyledPaginationDiv>
              </PaperDiv>
            )}
          </RightTableDiv>
        </>
      </MainContainerDiv>
      {/* {open ? (
        <CustomizedDialogs open={open} handleClose={handleClose} />
      ) : null} */}
    </>
  );
}

export default ScannerDataTable;
