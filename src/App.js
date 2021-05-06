import React from 'react';
import './App.css';
import MainRouter from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header/>
      <MainRouter/>
     <Footer/>
    </>
  );
}

export default App;
