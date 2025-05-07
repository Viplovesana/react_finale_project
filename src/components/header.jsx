import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/h&m2.jpg"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";

const Header=()=>{
    return(
        <>
       <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <img src={logo} width={90}  />
      <div className='icons'>  
        <FiHeart />
        <HiOutlineShoppingBag />
        </div>

      </Container>

    </Navbar>
        </>
    )
}
export default Header;