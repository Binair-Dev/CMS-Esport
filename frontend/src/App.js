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
          localStorage.setItem("informations", JSON.stringify(response.data[0]));
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
