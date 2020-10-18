import React from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
     <div className="app_body">
       <Sidebar></Sidebar>
       <Chat></Chat>

     </div>
      
    </div>
  );
}

export default App;
