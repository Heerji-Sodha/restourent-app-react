import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CarouselPage from './../../Components/slider/Slider'
import Chips from '../../Components/chips/chip'
import Card from '../../Components/card/card'


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
            <AppBar position="static" style={{ color: 'rgb(42 145 207)', color: 'white' }} >
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
        <CarouselPage/>
<div style={{display:'flex',marginLeft:'170px'}}>
    <Chips/>
    <Chips/>
    <Chips/>
    <Chips/>

</div>
<div style={{display:'flex',marginTop:'20px',marginLeft:'10px',padding:'10px'}}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>



        </div>
    );
}



