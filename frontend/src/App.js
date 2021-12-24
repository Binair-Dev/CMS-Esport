import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { getApiURL } from "./_config/config";

import Routes from "./components/Routes/Routes";

const App = () => {

  const [isInstalled, setInstalled] = useState(true);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
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

  return(
    <Router>
      <Routes isInstalled={isInstalled}/>
    </Router>
  );
}

export default App;
