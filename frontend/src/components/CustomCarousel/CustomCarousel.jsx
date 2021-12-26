import { Carousel } from "react-bootstrap";
import { CAROUSEL_DESCRIPTION_1, CAROUSEL_DESCRIPTION_2, CAROUSEL_TITLE_1, CAROUSEL_TITLE_2 } from "../../_config/lang";
import carousel1 from '../assets/img/carousel1.jpg'
import carousel2 from '../assets/img/carousel2.jpg'

const CustomCarousel = () => {
      return (
        <>
        <div style={{textAlign: "center"}}>
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{width: "100%", height: "720px"}}
                    src={carousel1}
                    alt="Premier carousel"
                    />
                    <Carousel.Caption>
                    <h3>{CAROUSEL_TITLE_1}</h3>
                    <p>{CAROUSEL_DESCRIPTION_1}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width: "100%", height: "720px"}}
                    src={carousel2}
                    alt="Deuxième carousel"
                    />

                    <Carousel.Caption>
                    <h3>{CAROUSEL_TITLE_2}</h3>
                    <p>{CAROUSEL_DESCRIPTION_2}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
      );
}
 
export default CustomCarousel;