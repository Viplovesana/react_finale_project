import Carousel from 'react-bootstrap/Carousel';
import ban from "../images/banner.avif"
import ban2 from "../images/banner2.avif"
import ban3 from "../images/banner3.avif"



const Home=()=>{
    return(
        <>
            <Carousel>
      <Carousel.Item>
        <img src={ban2} width={1600} height={690} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban} width={1600} height={690} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban3} width={1600} height={690} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    <poster>
        <img src={} />
        <img src={} />
    </poster>
        </>
    )
}
export default Home;