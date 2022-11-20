import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand className='py-2 my-2 d-flex justify-content-start' href="#home"><h2 className='p-2 m-2'>Apnito</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
         
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/"><h5>Home</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Contact</h5></Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown"  > 
              <NavDropdown.Item href="#action/3.1">web Scabing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                App Develop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Website Develop</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                Bot Develop
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Online learning platform" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Online Terms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                OFFline Terms
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PBL</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                WorkShop
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets"><h5>Products</h5></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;