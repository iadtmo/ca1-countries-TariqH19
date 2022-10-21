import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

const FilterButton = () => {
  return (
    <Container className="mt-5 ">
      <Row>
        <Col>
          <Dropdown className="float-end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Europe</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Africa</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterButton;
