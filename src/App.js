import React from "react";
import './App.css';
import './index.js';
import Formulario from './components/Formulario';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
        <Header/>
        <Menu/>
        <Formulario/>
        <Footer/>
        
       
    </div>
  );
}


export default App;
