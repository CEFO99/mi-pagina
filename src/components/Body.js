import React from "react";
import Skills from "./Skills";
import NavBar from "./NavBar";
import Contact from "./Contact";

function Body() {
  return (
    <div>
      <NavBar />

      <header className="parallax-header" id="home">
        <div className="container">
          <div className="header-content">
            <a href="">
              <img
                src={require("../assets/img/logo1.png")}
                alt=""
                width="400"
                className="d-block mx-auto img-fluid"
              />
            </a>
          </div>
          <h3 className="text-center text-light">Welcome to my portfolio</h3>
        </div>
      </header>

      <section className="about py-5">
        <div className="container py-5 reveal" id="about">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="item">
                    <div className="polaroid">
                      <img src={require("../assets/img/me.jpeg")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col-md-12">
                <div className="card">
                  <h5 className="card-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">About me</h5>
                    <p className="card-text">
                      Hi! I'm CEFO, I'm a fifth year student of
                      software engineering and this my portfolio where you can
                      see my skills and contact me.
                    </p>
                    <b>Name:</b>
                    <p>César Figueroa</p>
                    <b>Email: </b>
                    <p>cesarefo21@gmail.com</p>
                    <b>Phone Number: </b>
                    <p>7963-2053</p>
                    <p>Want to see my <b>CV</b>? Here</p>
                    <a href="https://drive.google.com/file/d/1OQ3NxLUk8PL4rROxV9ET4Bl1esT4StyL/view?usp=sharing" target="_blank" className="btn btn-primary">
                    <i className="fa fa-file-pdf" /> My CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services py-5 bg-light reveal" id="skills">
        <div className="container py-5">
          <h1 className="text-center pb-5">Skills</h1>
          <div className="row pb-3">
            <div className="col-lg-3 mb-3">
              <Skills icon="fa-brands fa-react" tool="React JS" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills icon="fa-brands fa-node-js" tool="Node JS" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills icon="fa-brands fa-git-alt" tool="Git" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills ico="iconify" data="bxl:mongodb" tool="MongoDB" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills ico="iconify" data="bxl:c-plus-plus" tool="C++" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills ico="iconify" data="mdi:language-csharp" tool="C#" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills icon="fa-brands fa-bootstrap" tool="Bootstrap" />
            </div>
            <div className="col-lg-3 mb-3">
              <Skills ico="iconify" data="fontisto:mysql" tool="MySQL" />
            </div>
          </div>
        </div>
      </section>

      <section className="education py-5 reveal" id="education">
        <div>
          <div className="container py-5">
            <h2 className="pb-5 pt-5 text-center mb-5 display-5">Education</h2>
            {/*<!-- First Content Section-->*/}
            <div className="row align-items-center connecting-lines d-flex">
              <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                <div className="circle font-weight-bold">
                  <i className="fa-solid fa-certificate"></i>
                </div>
              </div>
              <div className="col-6">
                <h4>Communicative English Program</h4>
                <h6>2008 - 2014</h6>
                <p>ITCA</p>
              </div>
            </div>
            {/*<!-- Path Line -->*/}
            <div className="row timeline">
              <div className="col-2">
                <div className="corner top-right"></div>
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner left-bottom"></div>
              </div>
            </div>
            {/*<!-- Second Content Section-->*/}
            <div className="row align-items-center justify-content-end connecting-lines d-flex">
              <div className="col-6 text-right">
                <h4>Computing Systems Diploma</h4>
                <h6>2015 - 2017</h6>
                <p>Colegio Salesiano Santa Cecilia</p>
              </div>
              <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                <div className="circle font-weight-bold">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
            </div>
            {/*<!-- Path Line -->*/}
            <div className="row timeline">
              <div className="col-2">
                <div className="corner right-bottom"></div>
              </div>
              <div className="col-8">
                <hr />
              </div>
              <div className="col-2">
                <div className="corner top-left"></div>
              </div>
            </div>
            {/*<!-- Third Content Section -->*/}
            <div className="row align-items-center connecting-lines d-flex">
              <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                <div className="circle font-weight-bold">
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
              </div>
              <div className="col-6">
                <h4>Software Engineer</h4>
                <h6>2018 - </h6>
                <p>Universidad Centroamericana José Simeón Cañas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact py-5 bg-light reveal" id="contact">
        <div className="container py-5">
          <h1 className="text-center pb-5">Contact me</h1>
          <div className="container d-flex align-items-center justify-content-center flex-wrap">
            <Contact
              image="https://i.pinimg.com/originals/63/fd/ff/63fdff4b7c1964f08c3c16f18f581bd7.gif"
              platform="WhatsApp"
              info="(+503) 7963-2053"
            />
            <Contact
              image="https://cdn.dribbble.com/users/2113992/screenshots/14510264/gmail_animation.gif"
              platform="E-mail"
              info="cesarefo21@gmail.com"
            />
            <Contact
              image="https://i.pinimg.com/originals/d3/3b/d9/d33bd9baa83a336184055c07dc8ccaa8.gif"
              platform="LinkedIn"
              info="https://www.linkedin.com/in/ icesarfigueroa/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
