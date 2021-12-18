import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import Install1 from "./components/Installation/Install1";
import Install2 from "./components/Installation/Install2";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getApiURL } from "./_config/config";

function App() {

  const [isInstalled, setInstalled] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(getApiURL() + "details").then(response => {
        if(response.data !== null && response.data.amount === 0){
            setInstalled(false);
        } else {
          setInstalled(true);
          localStorage.setItem("Title", response.data[0].Title);
          localStorage.setItem("Description", response.data[0].Description);
          localStorage.setItem("Rue", response.data[0].Rue);
          localStorage.setItem("Numero", response.data[0].Numero);
          localStorage.setItem("Pays", response.data[0].Pays);
          localStorage.setItem("CodePostal", response.data[0].CodePostal);
          localStorage.setItem("Apropos", response.data[0].Apropos);
        }
    }).catch(e => {
        setError(e.error)
    }).finally(() => {
        setLoading(false);
    })
  }, isInstalled);

  return (
    <>
    {!isInstalled ? 
    <>
      {/* Need to install */}
      <Router>
        <Routes>
          <Route exact path='/install1' element={<Install1/>}></Route>
          <Route exact path='/install2' element={<Install2/>}></Route>
        </Routes>
      </Router>
    </> 
    :
    <>
      {/* Base Website */}    
      <Head/>
      <Body/>
    </>
    }
    </>
  );
}

export default App;
