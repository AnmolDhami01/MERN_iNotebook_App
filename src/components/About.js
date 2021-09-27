import React from "react";

const About = () => {
  return (
    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            <div className="col-md-6 col-12 main_header_right  my-2">
              <figure>
                <img
                  style={{
                    width: "542px",
                    height: "528px",
                    position: "relative",
                    left: "-101px",
                    top: "-3px",
                  }}
                  src="https://picsum.photos/200?mobile"
                  alt=""
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md-6 col-12 main_header_left">
              <p>Welcome to Weather App</p>
              <h1>
                I am A <span className="text_clr"> Full Stack Devloper</span>{" "}
                Mern And Php
              </h1>
              <a href="/weather">
                <button className="btn btn-dark">Check Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
