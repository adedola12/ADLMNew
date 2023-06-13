import React from 'react'; 
import './css/App.css';
import './css/props.css'

import Header from './screens/header';
import Sidebar from './screens/sidebar';
import Home from './screens/home'
import Rightbar from './screens/rightbar';

function App() {
  return (
    <div className='App flex'>
    <Sidebar />
    <div className='app-content'>
    <Home />
    </div>
    <Rightbar />
    
   
    </div>
  );
}

export default App;
