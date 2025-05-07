import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/h&m2.jpg"

const Header=()=>{
    return(
        <>
         <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <img src={logo} width={90} className='logo' />
      </Container>

    </Navbar>
        </>
    )
}
export default Header;