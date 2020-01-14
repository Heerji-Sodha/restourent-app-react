import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import {Welcome,Login1,User1,Restourent,UserData, Dashbord,Addproduct,Addcatagery,Deleverysystem,Myrequest,User_requester,MainDaishbord} from  './../../Containers'

function AppRouter() {
  return (
    <Router>

   <Route path="/" exact component={Welcome} />
   <Route path="/login1"  component={Login1} />
   <Route path="/User1"  component={User1} />
   <Route path="/Restourent" component={Restourent} />
   <Route path="/UserData"  component={UserData} />
   <Route path="/Dashbord"  component={Dashbord} />
   <Route path="/addproduct"  component={Addproduct} />
   <Route path="/addcatagery"  component={Addcatagery} />
   <Route path="/deleverysystem"  component={Deleverysystem} />
   <Route path="/myrequest"  component={Myrequest} />
   <Route path="/userrequester"  component={User_requester} />
 <Route path='/MainDaishbord' component={MainDaishbord}/>

</Router>
  );
}

export default AppRouter;