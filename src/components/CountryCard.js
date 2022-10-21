import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterButton from "./FilterButton";

const CounrtyCard = () => {
  return (
    <Container className="mt-5">
      <FilterButton />
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Country Name</Card.Title>
              <Card.Text>Capital City</Card.Text>
              <Card.Text>Language</Card.Text>
              <Link to="/countries:id"> Find out more</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CounrtyCard;
