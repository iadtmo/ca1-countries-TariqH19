//imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Footer
const Footer = () => {
  return (
    <Row className="m-0 p-5 text-center text-light bg-dark ">
      <Col>
        <h3>Product</h3>
        <p>Autocapture</p>
        <p>Data Governance</p>
        <p>Virtual Events</p>
        <p>Virtual Users</p>
        <p>Behavioral Analytics</p>
        <p>Connect</p>
      </Col>
      <Col>
        <h3>Explore</h3>
        <p>Connect</p>
        <p>Resources</p>
        <p>Documents</p>
      </Col>
      <Col>
        <h3>Community</h3>
        <p>Community Central</p>
        <p>Support</p>
        <p>Help</p>
        <p>My info</p>
      </Col>
      <Col>
        <h3>Company</h3>
        <p>About us</p>
        <p>Partners</p>
        <p>Customers</p>
        <p>Contact us</p>
      </Col>
    </Row>
  );
};

export default Footer;
