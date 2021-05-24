import React from 'react';
import './App.css';
import MainRouter from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
function App() {
  const form = useSelector((state)=>state)
 console.log(form)
  return (
    <>
      <Header/>
      <MainRouter/>
     <Footer/>
    </>
  );
}

export default App;
