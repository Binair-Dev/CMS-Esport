import '../../components/assets/css/styles.css';
import { DEFAULT_WEBSITE_DESCRIPTION, DEFAULT_WEBSITE_NAME } from '../../_config/lang';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';

const Page = ({navbar, selected, footer}) => {
    return ( 
    <>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content={localStorage.getItem("Description") != null ? localStorage.getItem("Description") : DEFAULT_WEBSITE_DESCRIPTION} />
            <meta name="author" content="Brian Van Bellinghen" />
            <title>{localStorage.getItem("Title") != null ? localStorage.getItem("Title") : DEFAULT_WEBSITE_NAME}</title>
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
            <link href="css/styles.css" rel="stylesheet" />
        </head>
        <body id="page-top">
            {navbar != null ? <Navbar/> : null}
            <header class="masthead">
                {selected != null ? selected : <NotFound />}
            </header>
        </body>
    </>
    );
}
 
export default Page;