const Logout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload()
    window.location.pathname = "/";

    return (null);
}
 
export default Logout;