import React from 'react'
import './Login.css'
import logo from './../../Containers/image/Untitled-1.png';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {Login} from './../Store/action'

// import { Link } from 'react-router-dom'
// import {Login} from './../Store/action'
// import {connect} from 'react-redux'
class Login1 extends React.Component  {
constructor(){
super()
this.state={
email:'',
password:''
}

}


inputValue = (e)=> {
  console.log(e.target.value)
this.setState({
[e.target.name] : e.target.value
})
}
loginFunc = ()=>{
this.props.Login(this.props.history)
}


render(){
return (
    <div className="App">

<Paper id='p' style={{borderRadius:'110px 0px 113px 0px',backgroundColor:'rgb(4182 1108 207)'}}>


  <img id='img' src={logo} width='230px'/>


<h2 id='nameh2' style={{color:'rgb(42 145 207)'}}>** Login **</h2>
<form>
<input class="input100" type="text" name="Email" id="emailError" 
        onChange = {(e)=> this.inputValue(e)}
placeholder="Email" required='required' />


<br/>
<input class="input100" type="password" name="Password" id="password" 
        onChange = {(e)=> this.inputValue(e)}
        placeholder="Password" required='required'  />

<br/>

<button id="btnlogn" style={{border:'2px solid rgb(42 145 207) '
,backgroundColor:'rgb(42 145 207)',color:'white',}} 
onClick = {this.loginFunc}>
Log in</button>
</form>

<br/>
{/* <Link to ='/User1'  id="crtaccnt">Create  Your Acount </Link> */}
<a id="crtaccnt" onClick={()=> (window.location.href='user1')}>Create  Your Acount </a>

</Paper>













  
    </div>
  );
}
}



let mapStateToProps = (state) => {

  return{
      state: state
   }
}

let mapDispatchToProps = (dispatch)=> {
return{
  Login : (data,history)=> dispatch(Login(data,history))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login1);