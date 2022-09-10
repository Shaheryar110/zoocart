import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import van from "./img/van.jpg";
import "./vancard.css";

const Vancard = () => {
  return (
    <>
      <div className="inline">
        <Card sx={{ maxWidth: 500 }} className="cardalign">
          <CardMedia
            component="img"
            height="250"
            image={van}
            alt="green iguana"
          />
          <CardActions className="cardbtn">
            <Button variant="contained" size="large" className="sizing">
              Car Hire
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500 }} className="cardalign">
          <CardMedia
            component="img"
            height="250"
            image={van}
            alt="green iguana"
          />
          <CardActions className="cardbtn">
            <Button variant="contained" size="large" className="sizing">
              Van Hire
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Vancard;
