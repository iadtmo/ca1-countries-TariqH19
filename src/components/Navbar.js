import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container className="">
        <Row>
          <Col>
            <Stack direction="horizontal" gap={5}>
              <h1>
                <Link className="text-light text-decoration-none" to="/">
                  Countries
                </Link>
              </h1>
              <Form.Control
                className="me-auto"
                placeholder="Search for a country here"
              />
              <Button className="text-light bg-dark border-1 border-light">
                Submit
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
