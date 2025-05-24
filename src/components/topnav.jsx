
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../images/sv.png"


const Topnav=()=>{
    return(
        <>
        <div className='topnav'>
           <Navbar bg="dark" data-bs-theme="dark" >
             <img src={logo} width={100} className="logo1"/>
        <Container>
           
          <Navbar.Brand href="#home" className='name'>SABLE VOGUE</Navbar.Brand>
         <div className='list'>
           <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="women">Women</Nav.Link>
             <Nav.Link as={Link} to="kidz">Kidz</Nav.Link>
              <Nav.Link as={Link} to="mycart">MyCart</Nav.Link>
              <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
         </div>
        </Container>
      </Navbar>
        </div>
        </>
    )
}
export default Topnav;