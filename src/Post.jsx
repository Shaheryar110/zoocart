import { Button } from "@mui/material";
import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import "./post.css";
import fam from "./img/family.jpg";

const divStyle = {
  fontSize: "3rem",
};
const divStyle1 = {
    fontSize: "1rem",
  };
  const big = {
    background:"black",
  };

const post = () => {
  return (
    <>
      <MDBRow style={big}>
      <MDBCol md='6'>
      <div className="left">
          <h1 style={divStyle}>HEATHROW MEET & GREET</h1>
          <p style={divStyle1}> 
           <span className="pinky">ZOOCars</span>  meet & greet service is a fantastic option for any customer
            <br />
            flying into London Heathrow Airport requiring car or van hire
          </p>
          <Button variant="contained" style={divStyle1}>More Info</Button>
        </div>
      </MDBCol>
      
      <MDBCol md='5' style={big} >
        <img src={fam} alt="....." />
      </MDBCol>
    </MDBRow>
    </>
  );
};

export default post;
