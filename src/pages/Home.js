import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CountryCard from "../components/CountryCard";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Home = () => {
  const [country, setCountry] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [term, setTerm] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountry(response.data);
        setFilteredCountry(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const searchCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${term}`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
        //navigate("/country");
      });
  };

  // const handleChange = (e) => {
  //   setTerm(e.target.value);
  // };

  const handleClick = (e) => {
    searchCountry();
  };

  let countryComponents = filteredCountry.map((c, i) => {
    return (
      <CountryCard
        key={i}
        image={c.flags.svg}
        name={c.name.common}
        capital={c.capital}
        population={c.population.toLocaleString()}
      />
    );
  });

  const handleSelect = (event) => {
    if (event === "all") {
      setFilteredCountry(country);
    } else {
      let filter = country.filter((country) => {
        return country.region === event;
      });

      setFilteredCountry(filter);
    }
  };

  const handlePopSelect = (event) => {
    if (event === "all") {
      setFilteredCountry(country);
    } else {
      let filter = filteredCountry.filter((country) => {
        return country.population <= event;
      });

      setFilteredCountry(filter);
    }
  };

  const handleSearch = (event) => {
    setTerm(event.target.value);

    // if search term was changed to blank, show all countries
    if (event.target.value === "") {
      setFilteredCountry(country);
    }
    // else if search term is less than or = 1, do nothing
    else if (event.target.value <= 1) {
      return;
    } else {
      let filter = country.filter((country) => {
        return country.name.common.toLowerCase().includes(term.toLowerCase());
      });

      setFilteredCountry(filter);
    }
  };

  const handleSort = (event) => {
    let sorted = [...filteredCountry];

    sorted.sort((a, b) => {
      if (a.population < b.population) {
        return -1;
      }

      if (a.population > b.population) {
        return 1;
      }

      return 0;
    });

    setFilteredCountry(sorted);
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
              <Form.Control
                className="me-auto"
                placeholder="Search for a country here"
                onChange={handleSearch}
                value={term}
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
        <Stack direction="horizontal">
          <DropdownButton
            variant="bg-dark text-light"
            title="Region"
            onSelect={handleSelect}>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
            <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
            <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
            <Dropdown.Item eventKey="Oceania">Oceania</Dropdown.Item>
            <Dropdown.Item eventKey="Americas">Americas</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            variant="bg-dark text-light"
            title="Population"
            onSelect={handlePopSelect}>
            <Dropdown.Item eventKey="all">Any</Dropdown.Item>
            <Dropdown.Item eventKey="5000000">
              Less than 5 million
            </Dropdown.Item>
            <Dropdown.Item eventKey="15000000">
              Less than 15 million
            </Dropdown.Item>
          </DropdownButton>
          <Button
            variant="bg-dark text-light"
            className="float-end"
            onClick={handleSort}>
            Sort by population
          </Button>
          ;
        </Stack>
        <Row md={3} className="mt-5">
          {country.length > 0 ? countryComponents : <Loading />}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
