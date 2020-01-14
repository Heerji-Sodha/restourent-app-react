import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Deleverysystem from './../../Components/Deleverysystem/deleverysystem'
import User_requester  from './../../Components/user_requester/User_requester';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{color:'rgb(42 145 207)',color:'white'}} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ThariFood
          </Typography>
                    <Button color="inherit">SET LOCATION</Button>
                    <Button color="inherit">MY PROFILE</Button>
                    <Button color="inherit" onClick={() => (window.location.href = '/Addproduct')}>ADD PRODUCT</Button>




                    <Button color="inherit" onClick={() => (window.location.href = '/Addcatagery')}>ADD CATAGERY</Button>




                    <Button color="inherit" onClick={() => (window.location.href = '/Login1')}>Log Out</Button>
















                </Toolbar>
            </AppBar>
            {/* <br /> */}
{/* <User_requester/> */}
            {/* <br /> */}
            <Deleverysystem />




        </div>
    );
}



