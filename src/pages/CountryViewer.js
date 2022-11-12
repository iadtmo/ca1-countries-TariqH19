//imports
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

//component for country show/view page
const CountryViewer = () => {
  //variable containing the name of the country
  let { name } = useParams();
  //helps navigate to relevant page
  let navigate = useNavigate();
  const [view, setView] = useState([]);
  const [weather, setWeather] = useState([]);

  const [term, setTerm] = useState([]);
  useEffect(() => {
    // axios
    //   .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    //   .then((response) => {
    //     setView(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     navigate("/country");
    //   });
    fetchData();
  }, []);

  //function that gets data from both api's
  const fetchData = () => {
    const countriesApi = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=69821fba627343c0ee5dbba4c6f0d779`;

    const getCountries = axios.get(countriesApi);
    const getWeather = axios.get(weatherApi);
    Promise.allSettled([getCountries, getWeather])
      .then(
        //gets the data using spread operator
        axios.spread((...allData) => {
          // console.log(allData[0]);
          const allDataCountries = allData[0].value.data;
          const allDataweather = allData[1].value;
          setView(allDataCountries);

          // console.log(allDataweather);
          //if there is weather data set the weather
          if (allDataweather) {
            setWeather([allDataweather.data]);
          }
          // // setWeather(allDataweather);
          // if (allData[1].data) {
          //   setWeather([allData[1].data]);
          // }
          // // console.log(allData[1].data);
        })
      )
      .catch((e) => {
        // console.log(e);
      });
  };

  //searching for a country
  const searchCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${term}?fullText=true`)
      .then((response) => {
        setView(response.data);
        navigate(`/country/${term}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/country");
      });
  };

  //searching for the weather
  const searchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=69821fba627343c0ee5dbba4c6f0d779`
      )
      .then((response) => {
        setWeather([response.data]);
        if (response.data) {
          setWeather([response.data]);
        }
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
    searchWeather();
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      searchCountry();
      //searchWeather();
    }
  };

  //mapping through all countries
  let countryViewComponents = view?.map((c, index) => {
    return (
      <ConView
        key={index}
        image={c.flags.svg}
        name={c.name.common}
        capital={c.capital}
        population={c.population.toLocaleString()}
        region={c.region}
        timezones={c.timezones}
        borders={c.borders}
        currencies={Object.values(c.currencies)[0]?.name}
        languages={Object.values(c.languages)}
      />
    );
  });

  //mapping through all weather data
  let weatherComponents = weather?.map((w, index) => {
    // console.log(w);
    return (
      <WeatherConView
        key={index}
        temp={w.main.temp}
        ltemp={w.main.temp_min}
        humidity={w.main.humidity}
        icon={w.weather[0].icon}
        main={w.weather[0].description}
        wind={w.wind.speed}
        wname={w.name}
      />
    );
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

const WeatherConView = (props) => {
  return (
    <>
      <Container className="mt-5 pb-5 text-light">
        <Row>
          <Col>
            <h1 className="text-center text-light mb-5">How is the weather</h1>
          </Col>
        </Row>

        <Stack direction="horizontal">
          <Col>
            <Row>
              <Col>
                <Stack direction="horizontal">
                  <h3 className="">{props.wname}</h3>
                  <img
                    src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
                    alt=""
                  />
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <Stack direction="horizontal">
                  <p>
                    <strong>Temperature:</strong>
                  </p>
                  <p className="ms-2">{props.temp} celcius</p>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <Stack direction="horizontal">
                  <p>
                    <strong>Humidity:</strong>
                  </p>
                  <p className="ms-2">{props.humidity}</p>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <Stack direction="horizontal">
                  <p>
                    <strong>Lowest Temperature:</strong>
                  </p>
                  <p className="ms-2">{props.ltemp} celcius</p>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <Stack direction="horizontal">
                  <p>
                    <strong>Wind Speed:</strong>
                  </p>
                  <p className="ms-2">{props.wind} kph</p>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <Stack direction="horizontal">
                  <p>
                    <strong>Conditions:</strong>
                  </p>
                  <p className="ms-2">{props.main}</p>
                </Stack>
              </Col>
            </Row>
          </Col>

          <iframe
            title="map"
            width="1000"
            height="300"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${props.wname}&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"></iframe>
        </Stack>
      </Container>
    </>
  );
};

export default CountryViewer;
