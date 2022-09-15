import React, { useEffect, useState, useRef } from "react";
import MainNav from './MainNav'
import Footer from "./Footer";
import {Container, Row, Col} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";




const Home = () => {
  const [projects, setProject] = useState([])
  const form = useRef();

  useEffect(() => {
    axios.get("data.json")
    .then((res) => {
      setProject(res.data.projects)
    })
  }, [])
  const sendEmail = (e) => {
    alert("message sent successfully")
    e.preventDefault();
    emailjs.sendForm('service_gwc59qw', 'template_ozxe2cc', form.current, 'Q0wp2MaYHAs1Wo5H1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
        <MainNav />
    
    <section className='MainSecContainer' >
    <Container>
      <Row>
      <Col md={7} sm={12} className="bannartext wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
              <h2>Turn your website into a customer-acquisition engine.</h2>
              <h5>We build marketing websites that help you sell on autopilot.</h5>
              <HashLink to="/#contact"><button>Let's talk</button></HashLink>
            </Col>


            <Col md={5} sm={12} className="bannarimgs wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
              <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="" className="laptop" />
              <div className="imgbox gimg">
                <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
              </div>
              <div className="imgbox uimg">
                <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
              </div>
              <div className="imgbox wimg">
                <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
              </div>
            </Col>
          

      </Row>
    </Container>
    </section>
    <section className="homesec2">
        <Container>
          <Row>
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="secimgs">
                <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="" className="waves" />
                <img src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="" className="people" />
              </div>
            </Col>
            <Col md={6} sm={12} className="sec2text wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <button>the dream</button>
              <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="Project">
        <div className="LatestTextDiv">
          <h2 className="LatestTextt">Latest buids.  
          <Link className="LatestTextLink" to="/Project"> View Projects</Link>
          </h2>


        </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
      >
        {projects.slice(0, 5).map((projects =>
          <SwiperSlide key={projects.id}>
            <a href={projects.link} target="_blank">
              <img src={projects.photo} alt="Not_Found" />
            </a>
          </SwiperSlide>

          )) }
        
      </Swiper>
      </section>
      {/* Contact  section */}
      <section className="homesec6" id="contact">
        <Container>
          <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Contact Us</h3>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="homesec6Info">
                <p  ><span>Email:</span> Abdoaskerr@gmail.com</p>
                <p><span>Facebook:<Link to="https://web.facebook.com/3skoor1/" target="_blank"><FacebookIcon className="homesec6InfoIco" sx={{ fontSize: 40 }} /></Link>
                   </span> </p>
                <p><span>Twitter:<Link to="https://twitter.com/AbdoAsker" target="_blank"><TwitterIcon className="homesec6InfoIco" sx={{ fontSize: 40 }} /></Link>
                   </span></p>
                <p><span>LinkedIn:<Link to="https://www.linkedin.com/in/abdelrhman-asker-967206173/" target="_blank"><LinkedInIcon className="homesec6InfoIco" sx={{ fontSize: 40 }} /></Link>
                   </span></p>
              </div>
            </Col>
            <Col md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-flex">
                    <input type="text" name="name" placeholder="Name" />
                    {/* <input type="text" name="company" placeholder="Company" /> */}
                  </div>
                  <div className="d-flex">
                    <input type="text" name="email" placeholder="Email" />
                    {/* <input type="text" name="phone" placeholder="Phone" /> */}
                  </div>
                  <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
          <Footer />
    </>
  )
}

export default Home