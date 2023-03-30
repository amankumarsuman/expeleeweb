import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TablePagination,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { CustomTextFieldForTable } from "../coreComponents/CustomInputField";
import { Usekey } from "../customComponents/keyboard/KeyboardIntraction";
import ActionAreaCard from "./Cards";
import EventsAttended from "./EventHeaders";
import "./eventsStyle.css";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { convertDateRange } from "./ConvertDate";
const EventList = ({ events }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const [data, setData] = React.useState(events);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const init = {
    name: "",
    date: "2023-03-27",
    city: "",
  };
  const [searchValues, setSearchValues] = React.useState(init);
  console.log(searchValues);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchKeys = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === "name") {
      setSearchValues({ name: value });
    } else if (name === "city") {
      setSearchValues({ city: value });
    } else if (name === "date") {
      setSearchValues({ date: value });
    }
  };

  const handleSearch = () => {
    if (searchValues?.name) {
      const filterData = data.filter((el) =>
        el.name.toLowerCase().includes(searchValues?.name?.toLowerCase())
      );
      setData(filterData);
    } else if (searchValues?.city) {
      const filterData = data.filter((el) =>
        el.city.toLowerCase().includes(searchValues?.city?.toLowerCase())
      );

      setData(filterData);
    } else if (searchValues?.date) {
      const filterData = data.filter((el) =>
        convertDateRange(el.convertDateRangedate.toLowerCase()).includes(
          convertDateRange(searchValues?.date?.toLowerCase())
        )
      );
      setData(filterData);
    }
  };

  Usekey("Enter", handleSearch);
  Usekey("NumpadEnter", handleSearch);

  //refres
  const handleRefresh = () => {
    setData(events);
  };

  const handleReset = () => {
    setSearchValues({
      name: "",
      date: "",
      city: "",
    });
    handleRefresh();
  };

  const selectValue = events.map((el) => el?.city);

  const styles = {
    floatingLabelFocusStyle: {
      color: "red",
    },
  };

  return (
    <>
      <EventsAttended />

      <Paper
        elevation={6}
        sx={{
          marginTop: "2em",
          paddingBottom: "1em",
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "80%",
          margin: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ width: "95%", margin: "auto" }}>
          <Grid item xs={12} md={3}>
            <CustomTextFieldForTable
              variant="outlined"
              name="name"
              label="Event Name"
              onChange={handleSearchKeys}
              value={searchValues?.name}
              sx={{
                input: { color: "white", fontSize: "18px", fontWeight: "bold" },
              }}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "orange",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
          <Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel
      sx={{ color: "white" }}
      id="demo-simple-select-label"
    >
      Choose City
    </InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name="city"
      onChange={handleSearchKeys}
      value={searchValues?.city}
      label="Choose City"
      sx={{
        input: {
          color: "white", // set input text color to white
          fontSize: "18px",
          fontWeight: "bold",
        },
      }}
      InputLabelProps={{
        sx: {
          // set the color of the label when not shrinked
          color: "white",
          ["& .MuiSelect-nativeInput"]: {
            color: "white"
          },
          [`&.${inputLabelClasses.shrink}`]: {
            // set the color of the label when shrinked (usually when the TextField is focused)
            color: "orange",
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiInput-underline": {
            borderBottomColor: "White",
          },
        },
      }}
      
    >
      {selectValue?.map((el) => (
        <MenuItem value={el}>{el}</MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>

          </Grid>
          {/* <Grid item xs={12} md={3}>
            <CustomTextFieldForTable
              name="date"
              label="Event Date"
              onChange={handleSearchKeys}
              value={searchValues?.date}
              type="date"
              sx={{
                input: { color: "green", fontSize: "18px", fontWeight: "bold" },
              }}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "orange",
                  },
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "orange",
                  },
                },
              }}
            />
          </Grid> */}
          <Grid item xs={12} md={1.5}>
            <Button
              onClick={handleSearch}
              sx={{ marginRight: "1em", padding: "1em" }}
              variant="contained"
              fullWidth
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={12} md={1.5}>
            <Button
              sx={{ padding: "1em" }}
              fullWidth
              variant="outlined"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <div className="event-list">
        {data
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          ?.map((event, index) => (
            <div style={{ display: "flex" }}>
              {/* <Paper
            elevation={6}
            key={index}
            className={`event ${show ? "show" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <small>{event.date}</small>
          </Paper> */}
              <ActionAreaCard events={event} />
            </div>
          ))}
      </div>
      <Paper
        elevation={6}
        sx={{ width: "90%", margin: "auto", padding: "0.5em" }}
      >
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="Paper"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default EventList;
