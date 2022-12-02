import React from "react";
import ReactDOM from "react-dom";
import "./SelectedCountry.css";
// import Button from '@material-ui/core/Button';
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Component } from "react";
import Slider from "react-slick";
import uae from "../assets/image 2.png";

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
          </Slider>
          <Button variant="contained" className="btn-finish">
            Finish
          </Button>
        </div>
      </div>
    );
  }
}
