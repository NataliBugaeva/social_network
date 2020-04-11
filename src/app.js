 import React from 'react';
import  './reset.css';
import './app.css';

import CentralPart from "./components/central_part/сentralPart";
import Footer from "./components/footer/footer";
 import HeaderContainer from "./components/header/headerContainer";

const  App = (props) => {
  return (
          <div className="app">
              <HeaderContainer />
              {/*<CentralPart state={props.state} store={props.store} />*/}
              <CentralPart />
              <Footer />
          </div>
  );
};

export default App;
