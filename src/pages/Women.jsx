
import post from "../images/woimg2.jpg"
import video5 from "../images/video5.mp4"
import axios from "axios";
import { useState,useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const Women=()=>{
  const [mydata,setMydata]=useState([])
  const dispatch=useDispatch();

  const loaddata=async()=>{
      const response = await axios.get("http://localhost:3000/data/?category=WOMEN")
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

    <section className='poster'>
        <div><img src={post} width={762} height={810} /></div>
       <video src={video5} autoPlay muted loop height={810} width={962} ></video>
    </section>

    <div><h1 className='menwear'>WOMEN'S WEAR</h1></div>
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
export default Women;