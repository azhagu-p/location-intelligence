import React, { useState } from "react";
import "./Login.css";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
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
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, TextField, FormControl, InputLabel } from "@mui/material";

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: 10,
  width: 350,
  height: 50,
  padding: 1,
  color: "white",
  backgroundColor: "#3C4DE7",
}));

const LoginIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.1.91:8000/api/auth/token/", {
        email: values.email,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/country");
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
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
                focused
                sx={{ m: 3 }}
                type="text"
                fullWidth
                placeholder="Your mail"
                variant="standard"
                required
                onChange={(e) => setValues({ ...values, pass: e.target.value })}
                InputProps={{
                  style: { color: "white" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={mail} alt="mail" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                focused
                sx={{ m: 3 }}
                type={values.showPass ? "text" : "password"}
                fullWidth
                placeholder="Password"
                variant="standard"
                required
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
            <Box className="checkbox">
              <FormControlLabel
                label="Remember me"
                sx={{ color: "grey" }}
                control={<Checkbox value="" sx={{ color: "grey" }} />}
              />
              <Link href="#" ml={10}>
                Forget Password
              </Link>
            </Box>
            <LoginButton type="submit" sx={{ textTransform: "none" }}>
              Sign in
            </LoginButton>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginIn;
