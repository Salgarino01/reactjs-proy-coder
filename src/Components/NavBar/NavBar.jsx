import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='Navboots'>
        <Container>
          <Navbar.Brand href="#home"  >D&S Supply </Navbar.Brand >
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Aditivos</Nav.Link>
            <Nav.Link href="#pricing">Servicio</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      );
}

export default NavBar;