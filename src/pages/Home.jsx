import Carousel from 'react-bootstrap/Carousel';
import ban from "../images/banner.avif"
import ban2 from "../images/banner2.avif"
import ban3 from "../images/banner3.avif"
import post from "../images/poster.avif"
import post2 from "../images/poster2.avif"



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
    

    <section className='poster'>
        <div><img src={post} width={762} height={790} /></div>
       <div><img src={post2} width={760} height={790} /></div>
    </section>

    <div><h1 className='menwear'>MEN'S WEAR</h1></div>

    <div className='tag'>
    <button className='jeans'>JEANS</button>
    <button>REGULAR FIT $ STRAIGHT</button>
    <button>RELAXED</button>
    <button>BAGGY & LOOSE</button>
    <button>FLARE & BOOTCUT</button> 
    </div>
        </>
    )
}
export default Home;