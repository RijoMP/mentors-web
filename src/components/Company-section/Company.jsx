import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css"; 

const Company = () => {
  return (
    <section className="company">
      <Container>
        <Row>
        <Col lg="3" md="3" sm="6" xs="12">
           <div className="social">

              <a className="float-button wa" target="_blank" href="https://wa.me/919605360222" rel="noreferrer" >
                  <i className=" ri-whatsapp-fill social-icon social-whatsapp" aria-hidden="true"></i>
                  <span>Whatsapp</span>
              </a>
           </div>
           
          </Col>
          <Col lg="3" md="3" sm="6" xs="12">
              
            <div className="social">

              <a className="float-button fb" target="_blank" href="https://m.facebook.com/mentorsapp/" rel="noreferrer" >
                  <i className=" ri-facebook-fill social-icon social-facebook" aria-hidden="true"></i>
                  <span>Facebook</span>
              </a>
            </div>
          </Col>

          <Col lg="3" md="3" sm="6" xs="12">
          <div className="social ">

<a className="float-button ig" target="_blank" href="https://www.instagram.com/mentorsapp/" rel="noreferrer" >
    <i className=" ri-instagram-fill social-icon social-instagram" aria-hidden="true"></i>
    <span>Instagram</span>
</a>
</div>
          </Col>


          <Col lg="3" md="3" sm="6" xs="12">
          <div className="social ">

<a className="float-button yt" target="_blank" href="https://www.youtube.com/c/MentorsApp" rel="noreferrer" >
    <i className=" ri-youtube-fill social-icon social-youtube" aria-hidden="true"></i>
    <span>Youtube</span>
</a>
</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
