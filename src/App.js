import React from 'react';
import AppRouter from './Config/Router/Router'
import './App.css';
import { Provider } from 'react-redux'
import store from './Containers/Store'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
      <Provider store = {store} >
       <AppRouter/>
       </Provider>m
    </div>
  );
}

export default App;
