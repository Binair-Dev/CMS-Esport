import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Admin = () => {

    // useEffect(() => {
    //     setLoading(true);
    //     setError(null);
    //     axios.get(getApiURL() + "user").then(response => {
    //         if(response.data !== null && response.data.amount === 0){
    //             setAmount(response.data.amount);
    //             setalreadyDone(false);
    //         } else setalreadyDone(true);
    //     }).catch(e => {
    //         setError(e.error)
    //     }).finally(() => {
    //         setLoading(false);
    //     })
    // }, alreadyDone);

    return (
    <>
        <div class="container text-center">
            <h3>Bienvenue sur votre panel Administrateur</h3>
            
        </div>

        
        <Footer />
    </>);
}

export default Admin;