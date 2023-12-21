import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/banner";
import Rowpost from "./components/rowpost/rowpost";
import { actions, orginals } from "./url";

function App() {
  return(
    <div className="App">
        <Navbar/>
        <Banner/>
        <Rowpost title='Netflix orginals' URL={orginals}    />
        <Rowpost title='Action'URL={actions}/>
        
    </div>
  );
}

export default App;