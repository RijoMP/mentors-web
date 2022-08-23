import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img3.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero"> 
      <Container>
        <Row>
        <h2 className="mb-4 hero__title">
                Anytime Anywhere Learn on your Suitable Schedule
              </h2>
        </Row>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur  adipisicing elit.
                Aut saepe voluptatum earum delectus  deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            
            <div lg="6" md="6" className="download-app "><a href="http://play.google.com/store/apps/details?id=com.klee.mentors">
            <button class="gp-btn"><span class="gp-btn_text"></span></button>
              </a>
            </div>
              
            
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
