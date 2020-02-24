 import React from 'react';
import  './reset.css';
import './app.css';

import Header from "./components/header/header";
import CentralPart from "./components/central_part/сentralPart";
import Footer from "./components/footer/footer";

const  App = (props) => {
  return (
          <div className="app">
              <Header />
              {/*<CentralPart state={props.state} store={props.store} />*/}
              <CentralPart />
              <Footer />
          </div>
  );
}

export default App;
