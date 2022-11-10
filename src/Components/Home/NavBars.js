import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='py-2 my-2' href="#home"><h2 className='py-3'>Apnito</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
          <Nav.Link href="#features"><h5>Home</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Contact</h5></Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">web Scabing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                App Develop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Website Develop</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                Bot Develop
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="OLP" id="collasible-nav-dropdown">
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
          <Nav>
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;