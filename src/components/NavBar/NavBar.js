import { Button } from "../Ui";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/Context";
function Header() {
  const { login } = useUserContext();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Tesla Center</h3>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {login ? (
            <Form className="d-flex">
              <Link to="/login">
                <Button>تسجيل الدخول </Button>
              </Link>

              <Link to="/createAccount">
                <Button variant="outline-success">انشاء الحساب </Button>
              </Link>
            </Form>
          ) : (
            <>
              <ul>
                <li>
                  <a>mktklh</a>
                  <a>mktklh</a>
                  <a>mktklh</a>
                </li>
              </ul>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
