import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/h&m2.jpg"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header=()=>{
  const navigate =useNavigate();
  const cartData= useSelector(state=>state.mycart.cart);
  console.log(cartData);
  const cartLength=cartData.length;
    return(
        <>
       <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container>
        <img src={logo} width={90}  />
      <div className='icons'>  
        <FiHeart />
        <HiOutlineShoppingBag  onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}} />
        </div>

      </Container>

    </Navbar>
        </>
    )
}
export default Header;