import { Navbar, Nav , Container } from 'react-bootstrap'

const Navigation = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">SB</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href='/' >Home</Nav.Link>
      <Nav.Link eventKey={2}>Work</Nav.Link>
      <Nav.Link eventKey={3} href='/about'>About</Nav.Link>
    <Nav.Link eventKey={4}>Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

        </>
        )
}
export default Navigation;

