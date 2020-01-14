import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{color:'rgb(42 145 207)',color:'white'}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="   PENDING" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="PROGRESS" href="/trash" {...a11yProps(1)} />
          <LinkTab label="DELEVERD" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div style={{border:'2px  solid green',height:'250px',backgroundColor:'gray'}}>
      <TabPanel value={value} index={0}  style={{border:'2px  solid green',color:'red',borderRadius:'20px',fontWeight:'bold',height:'100px',backgroundColor:'white',width:'1150px',margin:'0 auto',marginTop:'20px',textAlign:'center'}}>
      ORDER IN PENDING
      </TabPanel>
      <TabPanel value={value} index={1}  style={{border:'2px  solid green',fontWeight:'bold',borderRadius:'20px',color:'red',height:'100px',backgroundColor:'white',width:'1150px',margin:'0 auto',marginTop:'20px',textAlign:'center'}}>
      ORDER IN PROGRESS

      </TabPanel>
      <TabPanel value={value} index={2}  style={{border:'2px  solid green',color:'red',fontWeight:'bold',borderRadius:'20px' ,height:'100px',backgroundColor:'white',width:'1150px',margin:'0 auto',marginTop:'20px',textAlign:'center'}}>
      ORDER DELEVERD
      </TabPanel>
      </div>
    </div>
  );
}