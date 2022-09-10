import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import road from "./img/road.jpg";
import car from "./img/car.jpg";
import vehical from "./img/vehical.jpg";
import mens from "./img/mens.jpg";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={road} alt="First slide" />
        <Carousel.Caption className="placing">
          <h3>CAR HIRE WITH A SMILE IN LONDON</h3>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            className="btnstyle"
          >
            view your car hire feet
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={car} alt="Second slide" />

        <Carousel.Caption className="placing">
          <h3>LONG TERM VEHICLE HIRE AT </h3>
          <h3>FANTASTIC LOW RATES IN LONDON</h3>
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
            view your car feet
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={vehical} alt="Third slide" />

        <Carousel.Caption className="placing">
          <h3>CAR HIRE IN LONDON</h3>
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
            view your feet
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={mens} alt="Third slide" />

        <Carousel.Caption className="placing">
          <h3>HEATHROW MEET & GREET CAR HIRE</h3>
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
            Click here for quote
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
