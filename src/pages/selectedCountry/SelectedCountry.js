import React from "react";
import "./SelectedCountry.css";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Component } from "react";
import Slider from "react-slick";
import uae from "../../assets/c_uae.png";
import qatar from "../../assets/c_qatar.png";
import usa from "../../assets/c_usa.png";
import ksa from "../../assets/c_ksa.png";
import esp from "../../assets/c_esp.png";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      className: "center",
      centerMode: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className="login2">
        <div className="body">
          <h2> Select the country </h2>
          <div className="back"></div>
          <Slider {...settings}>
            <div>
              <img src={uae} alt="#" />
              <p>
                <span className="sticker">
                  <CheckCircleIcon
                    className="check-icon"
                    sx={{ color: "green" }}
                  />{" "}
                  UAE
                </span>
              </p>
            </div>
            <div>
              <img src={uae} alt="#" />
              <p>
                <span className="sticker">
                  <CheckCircleIcon
                    className="check-icon"
                    sx={{ color: "green" }}
                  />{" "}
                  UAE
                </span>
              </p>
            </div>
            <div>
              <img src={qatar} alt="#" />
              <p>
                <span className="sticker">
                  <CheckCircleIcon
                    className="check-icon"
                    sx={{ color: "green" }}
                  />{" "}
                  QATAR
                </span>
              </p>
            </div>
            <div>
              <img src={usa} alt="#" />
              <p>
                <span className="sticker">
                  <CheckCircleIcon
                    className="check-icon"
                    sx={{ color: "green" }}
                  />{" "}
                  USA
                </span>
              </p>
            </div>
            <div>
              <img src={ksa} alt="#" />
              <p>
                <span className="sticker">
                  <CheckCircleIcon
                    className="check-icon"
                    sx={{ color: "green" }}
                  />{" "}
                  KSA
                </span>
              </p>
            </div>
            <div>
              <img src={esp} alt="#" />
              <p>
                <span className="sticker">
                  <CheckCircleIcon
                    className="check-icon"
                    sx={{ color: "green" }}
                  />{" "}
                  ESP
                </span>
              </p>
            </div>
         
    
       
          </Slider>
          <Button variant="contained" className="btn-finish">
            Finish
          </Button>
        </div>
      </div>
    );
  }
}
