import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import CounrtyCarousel from "../components/Carousel";

const CounrtyViewer = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <Button variant="dark">
                <Link variant="text-light" to="/">
                  Back
                </Link>
              </Button>
            </Stack>
            <h1 className="text-center">Country Name</h1>
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <CounrtyCarousel />
      </Container>
      <Container className="mt-5">
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
                      <strong>Counrty Name:</strong>
                    </p>
                    <p className="ms-2">Counrty</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Languages</strong>
                    </p>
                    <p className="ms-2">Language</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Region:</strong>
                    </p>
                    <p className="ms-2">Region</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Currencies:</strong>
                    </p>
                    <p className="ms-2">Currencies</p>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="horizontal">
                    <p>
                      <strong>Population:</strong>
                    </p>
                    <p className="ms-2">Population</p>
                  </Stack>
                </Col>
              </Row>
            </Col>
            <Col>
              <img
                src="https://picsum.photos/200/300"
                className="img-fluid"
                alt=""></img>
            </Col>
          </Stack>
        </Row>
      </Container>
    </>
  );
};

export default CounrtyViewer;
