import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { Chip } from "@trimbleinc/modus-react-bootstrap";
export const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav>
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
          <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
