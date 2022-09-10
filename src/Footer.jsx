import React from 'react'
import "./footer.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',

}));

const Footer = () => {
  return (
    <>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="uni-color">
  <Grid item xs={3} >
    <Item className="uni-color">
        <h3 className='foot-head'>INFORMATION</h3>
        <h6 className='footcol'><a>About</a></h6>
        <h6 className='footcol'><a>Area we cover</a></h6>
        <h6 className='footcol'><a>Terms & Condition</a></h6>
        <h6 className='footcol'><a>Privacy Policy</a></h6>
        <h6 className='footcol'><a>Use of Cookies</a></h6>
    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item className="uni-color">
    <h3 className='foot-head'>SERVICES</h3>
        <h6 className='footcol'><a>Car Hire</a></h6>
        <h6 className='footcol'><a>Van Hire</a></h6>
        <h6 className='footcol'><a>LHR Meet & Greet</a></h6>
        <h6 className='footcol'><a>28+ day Hire</a></h6>
        <h6 className='footcol'><a>Conenential Hire </a></h6>
        <h6 className='footcol'><a>Collison Damage Wavier </a></h6>
    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item className="uni-color">
    <h3 className='foot-head'>NEWSLETTER</h3>
    <TextField fullWidth label="EMAIL" id="fullWidth" className='footinput' placeholder='EMAIL' />
    <Button variant="contained" className='fotbtn'>SUBMIT</Button>
    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item className="uni-color">
    <h3 className='foot-head'>SOCIAL</h3>
    <p className='footcol'>Join us on your prefered network to keep up-to-date with the latest products and Promotions.</p>
    <FacebookIcon className='footcol' />
    <InstagramIcon className='footcol' />
    <YouTubeIcon className='footcol' />
    <LinkedInIcon className='footcol' />
    </Item>
  </Grid>
</Grid>
    </>
  )
}

export default Footer