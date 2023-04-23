import React from "react";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import colors from "@mui/joy/colors";
import { DateCalendar } from "@mui/x-date-pickers";
import { red } from "@mui/material/colors";
import { useUser } from "../../../queries/AuthQuery";
// import { DateRangePickerCalendar } from "react-nice-dates";
// import { DatePicker } from "@mui/lab";
const RightBar = () => {
  const theme = useTheme().palette;
  const user = useUser();

  return (
    <Box
      marginX={4}
      marginRight={6}
      marginY={3}
      paddingX={3}
      borderRadius={8}
      sx={{ display: { xs: "none", md: "block" } }}
      bgcolor="background.paper"
    >
      <Stack direction="column" justifyContent="space-around" height="100%">
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ height: "20%" }}
        >
          <Avatar />
          <Stack direction="column" alignItems="center">
            <Typography pt={1} color="text.primary" fontWeight="bold">
              {user?.name}
            </Typography>
            <Typography fontSize="small" color="text.secondary">
              Beginner Traveler
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ color: "text.secondary" }} />
        <Box height="60%" width="100%" sx={{ display: "flex" }}>
          <DateCalendar
            readOnly={true}
            sx={{
              margin: "auto 0",
              flex: 1,
              "&": {
                // fontSize: "1px",
                display: "flex",
                justifyContent: "center",
                height: "90%",
                // background: "",
                borderRadius: 6,
                backgroundColor: theme.bgColor.primaryTransparent,
              },
              "& .css-nk89i7-MuiPickersCalendarHeader-root": {
                px: 3,
                display: "flex",
                justifyContent: "space-between",
                height: "30%",
              },
              "& .css-1hu9zsz-MuiPickersCalendarHeader-labelContainer": {
                fontSize: "0.9em",
                fontWeight: "bold",

                color: "primary.main",
              },
              "& .css-yk19wu-MuiSvgIcon-root": {
                fontSize: "0.8rem",
              },
              // 本体
              "& .css-i5q14k-MuiDayCalendar-header": {},
              "& .css-sz8tj4-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                fontSize: "3px",
                height: "20px",
                width: "20px",
              },
              "& .css-15v8kdh-MuiPickersFadeTransitionGroup-root-MuiDateCalendar-viewTransitionContainer":
                {
                  height: "70%",
                },
              "& .css-1cafy48-MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition":
                {
                  // backgroundColor:'primary.main',
                  // height: "50%",
                  // minHeight:0
                },
              "& .css-2jurxj-MuiDayCalendar-slideTransition": {
                minHeight: 0,
                height: "50%",
              },
              "& .css-5pdg5n-MuiDateCalendar-root .css-flbe84-MuiDayCalendar-weekContainer":
                {
                  width: "100%",
                  margin: "0px",
                },
              "& .css-18sibjq-MuiPickersDay-root": {
                // width:'100%'
                height: "20px",
                width: "20px",
              },
              "& .css-xipecj-MuiDateCalendar-root .css-18sibjq-MuiPickersDay-root":
                {
                  height: "20px",
                  width: "20px",
                },
              "& .css-c1w0p-MuiButtonBase-root-MuiPickersDay-root": {
                height: "20px",
                width: "20px",
              },
              "& .css-1cafy48-MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition>*":
                {
                  height: "100%",
                },
              "& .css-1m1u3ts-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
                {
                  height: "20px",
                  width: "20px", // fontSize:'1px',
                  color: "primary.contrastText",
                  backgroundColor: "primary.light",
                },
            }}
          />
        </Box>
        {/* <Divider /> */}
        <Box
          height="30%"
          sx={{
            px: 1.2,
            py: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            p={2}
            height="100%"
            width="100%"
            maxHeight="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="20px"
            bgcolor="bgColor.primaryTransparent"
          >
            <Box width="30%">
              <Avatar sx={{ position: "absolute" }} />
              <CircularProgress
                variant="determinate"
                value={70}
                thickness={1.8}
                sx={{ position: "relative" }}
              />
            </Box>
            <Box px={1} textAlign="center">
              <Typography
                fontSize="0.8rem"
                fontWeight="bold"
                textAlign="center"
              >
                70%　🎉
              </Typography>

              <Typography fontSize="0.2rem">
                <span style={{ fontWeight: "bold" }}>Next Rank:</span> amatur
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default RightBar;
