import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidgets } from './CartWidgets';

const menu = [
    {text:"Home1", link:"#home"},
    {text:"Features", link:"#features"},
    {text:"Pricing", link:"#pricing"}
]
export const NavBar = () => (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Anga Brazil</Navbar.Brand>
          <Nav className="me-auto">
            {menu.map(item => (
                <Nav.Link key={item.text} href={"item.link"}>{item.text}</Nav.Link>
            ))}
          </Nav>
          <CartWidgets />
        </Container>
      </Navbar>
)