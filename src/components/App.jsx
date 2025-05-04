import React from 'react'
import { Element } from 'react-scroll';
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx';
import Services from './Services.jsx';
import Products from './Products.jsx';
import Footer from './Footer.jsx';
import '../styles/app.css';

const App = () => {
  return (
    <div>
    <div className="app">
      <Header/>
      <Element name='hero'><div className='hero-content'><Hero /></div></Element>
    </div>
      <Element name='about'><About /></Element>
      <Element name='services'><Services /></Element>
      <Element name='products'><Products /></Element>
      <Element name='contact'><Footer/></Element>
    </div>
  )
}

export default App