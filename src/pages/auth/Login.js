import React, { useContext, useState } from "react";
import "./Login.css";
import { Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import mail from "../../assets/svg/sms.svg";
import lock from "../..//assets/svg/lock.svg";
import Frame from "../../assets/svg/Frame.svg";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled, Checkbox } from "@mui/material";
import Link from "@mui/material/Link";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import "../crumbsDelete/CrumbsDelete.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { login_api } from "../../api_endpoints/common";

import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthProvider";
// import {useLocation } from "react-router-dom";

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: 10,
  width: 350,
  height: 50,
  padding: 1,
  color: "white",
  backgroundColor: "#3C4DE7",
}));

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const from = location.state?.from?.pathname || "/";

  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(login_api, {
        // headers:{'content-Type':'application/json'},
        // withCredentials: true,
        email: values.email,
        password: values.pass,
      });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const refreshToken = response?.data?.refreshToken;
      const email = values.email;
      const passwords = values.pass;

      setAuth(email, passwords, roles, accessToken, refreshToken);
      setSuccess(true);
      navigate(from,{replace:true});
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email  or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(login_api);
  //   axios.post(login_api, {
  //     email: values.email,
  //     password: values.pass,
  //   })
  //     .then((res) => {
  //       localStorage.setItem("token", res.data.access);
  //       navigate("/country");
  //     })
  //     .catch((err) => console.error(err));
  // };

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth className="container">
      <Box className="flex-container">
        <Box className="form-container">
          <Box>
            <img src={Frame} alt="logo" style={{ height: 102, width: 239 }} />
            <h2 className="h1">Curate,Visualize,Activate</h2>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className="form">
              <TextField
                required
                focused
                fullWidth
                sx={{ m: 3 }}
                type="email"
                placeholder="Your mail"
                variant="standard"
                InputProps={{
                  style: { color: "white" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={mail} alt="mail" />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />

              <TextField
                required
                focused
                fullWidth
                sx={{ m: 3 }}
                type={values.showPass ? "text" : "password"}
                variant="standard"
                placeholder="Password"
                onChange={(e) => setValues({ ...values, pass: e.target.value })}
                InputProps={{
                  style: { color: "white", borderBlockColor: "white" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={lock} alt="lock" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handlePassVisibility}
                        aria-label="toggle password"
                        edge="end"
                        sx={{ color: "grey" }}
                      >
                        {values.showPass ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <FormControlLabel
                sx={{ color: "grey" }}
                control={<Checkbox defaultChecked color="primary" />}
                label="Remember  me"
              />
              <Link
                component="button"
                variant="body2"
                onClick={handleOpen}
                underline="hover"
                sx={{ marginLeft: "75px", color: "grey" }}
              >
                Forgot Password?
              </Link>
            </Box>
            <LoginButton variant="contained" type="submit">
              Sign in
            </LoginButton>
          </form>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container maxWidth className="container">
              <Box className="flex-container">
                <Box className="form-container card-2">
                  <Box>
                    <h2 className="h1">Forgot Password</h2>
                  </Box>
                  <form onSubmit={handleSubmit}>
                    <Box className="form">
                      <TextField
                        label="Enter your mail address"
                        InputLabelProps={{
                          style: { fontSize: 25, color: "grey" },
                        }}
                        focused
                        fullWidth
                        sx={{ m: 3 }}
                        type="email"
                        variant="standard"
                        InputProps={{
                          style: { color: "white", marginTop: "35px" },
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={mail} alt="mail" />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) =>
                          setValues({ ...values, email: e.target.value })
                        }
                      />
                    </Box>
                    <LoginButton
                      onClick={handleClose}
                      type="submit"
                      sx={{ textTransform: "none" }}
                    >
                      Forgot Password
                    </LoginButton>
                  </form>
                </Box>
              </Box>
            </Container>
          </Modal>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
