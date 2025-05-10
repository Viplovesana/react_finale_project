
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Topnav=()=>{
    return(
        <>
        <div className='topnav'>
           <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Hennes & Mauritz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Men</Nav.Link>
            <Nav.Link href="#pricing">kids</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </div>
        </>
    )
}
export default Topnav;