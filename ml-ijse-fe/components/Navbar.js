import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-md navbar-dark bg-secondary"
    >
      <Container className="container-xxl">
        <Navbar.Brand href="/">Female Diabetes Predictor</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="about">About</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
