
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Topnav=()=>{
    return(
        <>
        <div className='topnav'>
           <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Hennes & Mauritz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="women">Women</Nav.Link>
             <Nav.Link as={Link} to="kidz">Kidz</Nav.Link>
              <Nav.Link as={Link} to="mycart">MyCart</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </div>
        </>
    )
}
export default Topnav;