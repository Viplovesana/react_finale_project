
import axios from "axios";
import { useState,useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api from '../config/myurl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const Search=()=>{
  const [mydata,setMydata]=useState([])
  const dispatch=useDispatch();
  const [pro, setPro]= useState("");

  const loaddata=async()=>{
      let url = api;
      const response = await axios.get(url)
      console.log(response.data);
      setMydata(response.data);
  }
useEffect(()=>{
  loaddata();
},[])


    const handleInput=(e)=>{
       let proval= e.target.value;
       setPro(proval);
    }

   const ans= mydata.map((key)=>{
           let myval=pro.toLocaleLowerCase();
           let mystring= key.name.toLocaleLowerCase();
         const status= mystring.includes(myval);
         console.log(status)

       if (status){
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
          <div className='price'>{key.price}</div>
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

       }
 
})
    return(
        <>
        <div className="tital"><h1 className='menwear'>Total Wear</h1></div>
             <center>
          <h1> Our Latest Wear</h1>

          <h1></h1>
          Enter Product name : <input type="text" value={pro} onChange={handleInput} className="input"/>
           
          </center>

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
export default Search;