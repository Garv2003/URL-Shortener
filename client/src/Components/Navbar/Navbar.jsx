import { Link } from "react-router-dom";
const Navbar = ({ setDisplay, setUrl }) => {
  return (
    <>
      <h1 className="container-fluid text-center bg-dark p-4 shadow-lg">
        <button
          onClick={() => {
            setUrl("");
            setDisplay(true);
          }}
          className="border-0 bg-transparent text-primary fw-bold"
        >
          {" "}
          URl Shortener
        </button>
      </h1>
    </>
  );
};

export default Navbar;
