import { useState, useEffect } from "react";
import axios from "../config/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterButton from "../components/FilterButton";
import CountryCard from "../components/CountryCard";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const [country, setCountry] = useState([]);

  const [term, setTerm] = useState([]);
  useEffect(() => {
    axios
      .get("/all")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const searchCountry = () => {
    axios
      .get(`/name/${term}`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
        //navigate("/country");
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
  let countryComponents = country.map((c, i) => {
    return (
      <CountryCard
        key={i}
        image={c.flags.png}
        name={c.name.common}
        capital={c.capital}
        population={c.population.toLocaleString()}
      />
    );
  });

  const byRegion = (regionName) => {
    axios
      .get(`${regionName}`)
      .then((response) => {
        //console.log(response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
        //navigate("/country");
      });
  };

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
            </Stack>
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
              />
              <Button
                className="text-light bg-dark border-1 border-light"
                onClick={handleClick}
                to={`/country/${term}`}>
                Submit
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <FilterButton onSelect={byRegion} />
        <Row md={3} className="mt-5">
          {country.length > 0 ? countryComponents : <Loading />}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
