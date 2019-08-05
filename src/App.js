import React from 'react';
import './App.css';
import FootTab from "@/components/layout/footTab"
import Router from '@/router';

function App() {
  return (
    <div className="App">
      <Router/>
      <FootTab/>
    </div>
  );
}
export default App;
