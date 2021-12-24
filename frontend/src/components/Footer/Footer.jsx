const Footer = () => {
    return ( 
        <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5">
                <div class="small text-center text-muted">Copyright &copy; 2021 - {localStorage.getItem("Title")}
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;