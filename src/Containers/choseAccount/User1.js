import React from 'react';
import logo from './../../Containers/image/Untitled-1.png';
import Paper from '@material-ui/core/Paper';
 import './user.css'


class User1 extends React.Component{
render(){
return(
<div>
<Paper id='p1' style={{borderRadius:'110px 0px 113px 0px',backgroundColor:'rgb(4182 1108 207)'}}>


  <img id='img' src={logo} width='240px'/>


<h2 id='nam'style={{color:'rgb(42 145 207)'}}>** Chose Account**</h2>

<button id="btnuser" style={{backgroundColor:'rgb(42 145 207)',color:'white',border:'2px solid rgb(42 145 207) ',fontWeight:'bold'}} onClick={()=>(window.location.href='./UserDat')}> USER</button>
<br/>
<button id="btnres" style={{backgroundColor:'rgb(42 145 207)',border:'2px solid rgb(42 145 207) ',color:'white',fontWeight:'bold'}}  onClick={()=>(window.location.href='./Restourent')}> RESTAURENT</button>

</Paper>



</div>
)
}
}


export default User1;