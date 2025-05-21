import Carousel from 'react-bootstrap/Carousel';
import video2 from "../images/video3.mp4"
import video from "../images/videobg2.mp4"
import video4 from "../images/video4.mp4"
import post from "../images/poster3.avif"
import post2 from "../images/poster2.avif"
import axios from "axios";
import { useState,useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api from '../config/myurl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const Home=()=>{
  const [mydata,setMydata]=useState([])
  const dispatch=useDispatch();

  const loaddata=async()=>{
      let url = api;
      const response = await axios.get(url)
      console.log(response.data);
      setMydata(response.data);
  }
useEffect(()=>{
  loaddata();
},[])
const ans=mydata.map((key)=>{
  return(
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image}/>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
         {key.dict}
        </Card.Text>
        <Card.Text>
          <h6>RS.</h6>
         {key.price}
        </Card.Text>
        <Card.Text>
         {key.category}
        </Card.Text>

        <Button variant="primary" className='btnn' onClick={()=>{dispatch(addToCart({id:key.id, name:key.name,
        dict:key.dict, category:key.category ,image:key.image, qnty:1, price:key.price }))}}>Add to cart</Button>
      </Card.Body>
    </Card>
    </>
  )
})
    return(
        <>
            <Carousel>
      <Carousel.Item>
       <video src={video} autoPlay muted loop width={1510}></video>
        <Carousel.Caption>
          <h3>On Top Trendings</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <video src={video2} autoPlay muted loop width={1510}></video>
        <Carousel.Caption>
          <h3>persuing Style and comfort</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video src={video4} autoPlay muted loop width={1510} ></video>
        <Carousel.Caption>
          <h3>the Childhood</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <section className='poster'>
        <div><img src={post} width={753} height={810} /></div>
       <div><img src={post2} width={752} height={810} /></div>
    </section>

    <div><h1 className='menwear'>MEN'S WEAR</h1></div>
    <div className='tag'>
    <button className='jeans'>JEANS</button>
    <button>REGULAR FIT $ STRAIGHT</button>
    <button>RELAXED</button>
    <button>BAGGY & LOOSE</button>
    <button>FLARE & BOOTCUT</button> 
    </div>

    <section>  
      <div className='cards'>
        {ans}
      </div>
    </section>

    <section  className='text'>
      <h5>MENS CLOTHING</h5>
    <h6>Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers and cargo styles in all the staple colors. dreaming of denim? our men's jeans offer a range of fits to suit your style, including skinny, straight and tapered, to name just a few. Wear yours with a trendy oversized shirt or a classic denim number from our men's shirts edit. and when it comes to chilly weather, our men's jackets and coats have you covered – we've got puffer jackets and trench coats, as well as leather jackets and bomber jackets in year-round colors.</h6>
    </section>

    <hr size="6" color='brown'/>

        </>
    )
}
export default Home;