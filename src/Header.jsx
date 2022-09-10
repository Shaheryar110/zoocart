import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import "./home.css";
import Button from "@mui/material/Button";
import images from "./img/real.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Chip from "@mui/material/Chip";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Item = styled(Paper)(({ theme }) => ({
  
  
  padding: theme.spacing(2),
  textAlign: "right",
 
}));
const divSty = {
  fontSize: "1rem",
};

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="uper">
        <Grid container spacing={2}>
          <Grid xs={4} className="uper">
            <Item className="parents">
              <img src={images} />
            </Item>
          </Grid>
          <Grid xs={4}>
            <div className="card">
              <div className="card-title">
                <Chip
                  size="large"
                  className="head"
                  icon={<AccessTimeIcon />}
                  label="OPENEING TIME"
                />
              </div>
              <div className="content">
                <div className="times">
                  MON - FRI <br />
                  SATURDAY <br />
                  SUNDAY <br />
                  BANK HOLIDAYS
                </div>
                <div className="right">
                  <span className="alignment">08:00 - 15:00</span>
                  <span className="alignment">08:00 - 11:00</span>
                  <span className="alignment">Closed</span>
                  <span className="alignment">Closed</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={4}>
            <Item className="parents">
              <div className="parent">
                <div className="menu">
                  <h2 className="styls">
                
                    <a className="link">About US </a>
                  </h2>
                  <h2 className="styls">
                    <a className="link">Conatct US </a>
                  </h2>
                  <h2 className="styls">
                    <a className="link">Area We Cover </a>
                  </h2>
                </div>
                <h1 className="phone">
                  <PhoneIcon className="space" style={divSty}  />
                  0310 0108 467
                </h1>
                <h3 className="phone">
                  <MailOutlineIcon className="space" style={divSty} />
                  mshaheryar35@gmail.com
                </h3>
                <Button
                  className="btn"
                  variant="outlined"
                  startIcon={<ContactMailIcon />}
                  endIcon={<ChevronRightIcon />}
                >
                  DVLA LICENSE CHECKED
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
