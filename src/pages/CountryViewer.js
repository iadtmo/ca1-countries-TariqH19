import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../config/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CountryViewer = () => {
  let { name } = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const [view, setView] = useState([]);
  const [term, setTerm] = useState([]);
  useEffect(() => {
    axios
      .get(`/name/${name}?fullText=true`)
      .then((response) => {
        setView(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/country");
      });
  });
  const searchCountry = () => {
    axios
      .get(`/name/${term}`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
        navigate(`/country/${term}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/country");
      });
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = (e) => {
    searchCountry();
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      searchCountry();
    }
  };

  let countryViewComponents = view.map((c, i) => {
    return (
      <>
        <ConView
          key={i}
          image={c.flags.svg}
          name={c.name.common}
          capital={c.capital}
          population={c.population.toLocaleString()}
          region={c.region}
          timezones={c.timezones}
          borders={c.borders}
          currencies={Object.values(c.currencies)[0].name}
          languages={Object.values(c.languages)}
        />
      </>
    );
  });

  return (
    <div className="bg-dark">
      <Container className="">
        <Row>
          <Col>
            <h1>
              <Link className="text-light text-decoration-none" to="/">
                Countries
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col>
            <Stack direction="horizontal" gap={5}>
              <Form.Control
                className="me-auto"
                placeholder="Search for a country here"
                onChange={handleChange}
                onKeyUp={handleOnKeyUp}
                to={"/"}
              />
              <Button
                className="text-light bg-dark border-1 border-light"
                onClick={handleClick}
                to={"/"}>
                Submit
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
      {countryViewComponents}
    </div>
  );
};

const ConView = (props) => {
  return (
    <>
      <Container className="mt-5 pb-5">
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <Button variant="dark">
                <Link className="text-light" to="/">
                  Back
                </Link>
              </Button>
            </Stack>
            <h1 className="text-center text-light">{props.name}</h1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 pb-5 text-light">
        <Row>
          <Stack direction="horizontal">
            <Col>
              <Row>
                <Col variant="">
                  <h1>Facts</h1>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Region:</strong>
                    </p>
                    <p className="ms-2">{props.region}</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Timezone:</strong>
                    </p>
                    <p className="ms-2">{props.timezones}</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Population:</strong>
                    </p>
                    <p className="ms-2">{props.population}</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Currencies:</strong>
                    </p>
                    <p className="ms-2">{props.currencies}</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Languages:</strong>
                    </p>
                    <p className="ms-2">{[props.languages].join(" ")}</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Capital:</strong>
                    </p>
                    <p className="ms-2">{props.capital}</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Border:</strong>
                    </p>
                    <p className="ms-2">{[props.borders].join(" ")}</p>
                  </Stack>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={props.image} className="img-fluid" alt=""></img>
            </Col>
          </Stack>
        </Row>
      </Container>
    </>
  );
};

export default CountryViewer;
