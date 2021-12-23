import { Carousel } from "react-bootstrap";
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
                    <h3>Premier carousel</h3>
                    <p>Premier carousel: description.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width: "100%", height: "720px"}}
                    src={carousel2}
                    alt="Deuxième carousel"
                    />

                    <Carousel.Caption>
                    <h3>Deuxième carousel</h3>
                    <p>Deuxième carousel: description.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
      );
}
 
export default CustomCarousel;