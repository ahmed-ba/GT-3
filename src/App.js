
import React from "react";

import {Navbar ,Cta, Brand} from './components/';
import {Footer,Blog,Possibility,Feautres,WhatGPT3,Header} from './containers';
import  './App.css';

const App = () =>{
    return(
        <div className="App">
        <div className="gardient__bg">
        <Navbar/>
        <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feautres/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
</div>
    )
}

export default App;