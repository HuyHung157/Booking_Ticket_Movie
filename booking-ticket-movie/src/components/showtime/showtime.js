import React from "react";
import PropTypes from "prop-types";
import {  useTheme } from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';
import { Box, Paper, Typography, Tab, Tabs } from "@material-ui/core";
import NowShowing from "../nowShowing/nowShowing";
import CommingSoon from "../commingSoon/commingSoon";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

export default function Showtime() {
  // const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <div className="showtime" id="showtime" >
      <div className="showtime__padding">
        <div className="showtime__content">
          <Paper >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="ĐANG CHIẾU" />
              <Tab label="SẮP CHIẾU" />
            </Tabs>
          </Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {/* TAB_CONTENT */}
            <TabPanel value={value} index={0}>
              <NowShowing />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CommingSoon />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
