//imports
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

//component to display countries using cards
const CountryCard = (props) => {
  return (
    <Card className=" border-0 p-3 bg-dark">
      <Card.Img
        variant="top"
        className="img-resize"
        src={props.image}
        to={`/country/${props.name}`}
      />
      <Card.Body>
        <Card.Title>
          <Link
            className="text-light text-decoration-none"
            to={`/country/${props.name}`}>
            <h3>{props.name}</h3>
          </Link>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroup.Item className="text-light bg-dark">
          <p>
            <strong>Capital:</strong> {props.capital}
          </p>
        </ListGroup.Item>
        <ListGroup.Item className="text-light bg-dark">
          <p>
            <strong>Population:</strong> {props.population}
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CountryCard;
