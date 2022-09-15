import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () => {
  return (
    <>
    <Container className='FooterCont'>
        <Row className='FooterRow'>
            <Col  md="3" sm="12">
            <div className='LeftDivFooter'>
                <Link className='LeftDivFooterLink' to="/">
                <div><h3>A-A Designs</h3></div>
                <div><h5>Creative</h5></div></Link>
            </div></Col>
            <Col  md="5" sm="12">
            <div className='MidDivFooter'>
                <Link className='MidLinkFooter' to="/#">Latest Builds</Link>
                <Link className='MidLinkFooter' to="/#">Process</Link>
                <Link className='MidLinkFooter' to="/#">Services</Link>
                <Link className='MidLinkFooter' to="/#contact">Contact Us</Link>
                <Link className='MidLinkFooter' to="/Project">Projects</Link>
            </div></Col>
            <Col md="3" sm="12" className='IconsDivFooter'>
            <div >
            <Link className='IconsDivFooterLink' to="https://web.facebook.com/3skoor1/" target="_blank"><FacebookIcon className="homesec6InfoIco" sx={{ fontSize: 40 }} /></Link>
            <Link  className='IconsDivFooterLink' to="https://twitter.com/AbdoAsker" target="_blank"><TwitterIcon className="homesec6InfoIco" sx={{ fontSize: 40 }} /></Link>
            <Link  className='IconsDivFooterLink' to="https://www.linkedin.com/in/abdelrhman-asker-967206173/" target="_blank"><LinkedInIcon className="homesec6InfoIco" sx={{ fontSize: 40 }} /></Link>
                   </div></Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Footer