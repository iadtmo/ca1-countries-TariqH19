import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CountryViewer = () => {
  let { name } = useParams();
  let navigate = useNavigate();
  const [view, setView] = useState([]);
  const [weather, setWeather] = useState([]);
  const [term, setTerm] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
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
      .get(`https://restcountries.com/v3.1/name/${term}`)
      .then((response) => {
        setView(response.data);
        navigate(`/country/${term}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/country");
      });
  };

  const getWeather = () => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c52c6f5b80ca4b3fa91202543220611&q=London&aqi=no"
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
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
          key={c.cioc}
          image={c.flags.svg}
          name={c.name.common}
          capital={c.capital}
          population={c.population.toLocaleString()}
          region={c.region}
          timezones={c.timezones}
          borders={c.borders}
          currencies={Object.values(c.currencies)[0].name}
          languages={Object.values(c.languages)}
          maps={c.maps.openStreetMaps}
        />
      </>
    );
  });

  let weatherComponents = weather.map((w, i) => {
    return console.log(getWeather);
  });

  return (
    <div className="bg-dark">
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
      {weatherComponents}
      <Container>
        <Row>
          <iframe
            title="map"
            width="600"
            height="500"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${name}&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"></iframe>
        </Row>
      </Container>
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
