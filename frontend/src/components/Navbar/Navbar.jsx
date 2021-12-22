const Navbar = () => {
    return ( 
    <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="#page-top">{localStorage.getItem("Title")}</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#contact">TemplateButton1</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">TemplateButton2</a></li>
                            {/* TODO: Injecter la liste des boutons de la navbar */}
                        </ul>
                    </div>
                </div>
            </nav>
    </> );
}
 
export default Navbar;