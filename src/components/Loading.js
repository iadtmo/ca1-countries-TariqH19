import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <h1 className="text-white">
      Getting Countries
      <span>
        <Spinner animation="border" variant="success" />
      </span>
    </h1>
  );
};

export default Loading;
