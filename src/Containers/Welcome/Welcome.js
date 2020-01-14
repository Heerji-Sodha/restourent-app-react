import React from 'react'
import logo from './../../Containers/image/Untitled-1.png';
import Paper from '@material-ui/core/Paper';

class Welcome extends React.Component{ 
render(){
return (
 <Paper style={{width:'450px',margin:'0 auto',backgroundColor:'rgb(4182 1108 207)',marginTop:'100px',borderRadius:'110px 0px 113px 0px'}}>
    <div >
  <img src={logo} className="App-logo" alt="logo" style={{marginLeft:'50px' }} />
  </div>
  <div>
<h1 style={{marginLeft:'10px',fontFamily:'Open Sans',color:'rgb(42 145 207)'}}>Well Come To Thari Food</h1>

<button style={{border:'2px solid rgb(42 145 207) ',marginLeft:'170px',borderRadius:'30px',backgroundColor:'rgb(42 145 207)',color:'white',padding:'10px',fontWeight:'bold',cursor:'pointer'}} onClick={()=>(window.location.href='./Login1')}>Continue</button>
   
      
      </div>
      <br/>
      </Paper>
  );
}
}

export default Welcome;