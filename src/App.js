import React from "react"
import Navbar from  "./component/Navbar/Navbar"
import './App.css';
import Banner from "./component/Banner/Banner"
import { originals,Action,Horror,Comedy,Romance,Docu,Trending } from './Urls'
import Rowpost from "./component/Rowpost/Rowpost"

function App() {
  return (
    
    <div className="App"> 
    
    <Navbar/>
    <Banner/>
    <Rowpost  url={originals} title="Netflix orginals"size="isbig"/>
    <Rowpost  url={Action} title="Action" size="issmall"/>
    <Rowpost  url={Horror} title="Horror"size="issmall"/>
    <Rowpost  url={Comedy} title="Comedy"size="issmall"/>
    <Rowpost  url={Romance} title="Romance"size="issmall"/>
    <Rowpost  url={Docu} title="Docu"size="issmall"/>
    <Rowpost  url={Trending} title="Trending"size="issmall"/>
    
    </div>
    
    
    
    
    
  );
}

export default App;