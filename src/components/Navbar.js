import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Navbar = () => {
  return (
    <>
      <Container className="">
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <h1>Countries</h1>
              <Form.Control
                className="me-auto"
                placeholder="Search for a country here"
              />
              <Button variant="secondary">Submit</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
