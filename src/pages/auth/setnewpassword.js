import React, { useState } from "react";
import "./Login.css";
import { Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import lock from "../../assets/svg/lock.svg";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, TextField } from "@mui/material";

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
      .post("http://192.168.0.112:8000/api/auth/token/", {
        email: values.email,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
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
        <Box className="form-container card-2">
          <Box>
            <h2 className="h1">Set up new password</h2>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className="form">
            <TextField
                  label="New Password"
                  InputLabelProps={{style: {fontSize: 25,color: "grey"}}}
                  focused
                  fullWidth
                  sx={{ m: 3 }}
                  type={values.showPass ? "text" : "password"}
                  variant="standard"
                  onChange={(e) => setValues({ ...values, pass: e.target.value })}
                  InputProps={{
                    style: { color: "white",marginTop: "35px" },
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
              <TextField
                  label="Confirm Password"
                  InputLabelProps={{style: {fontSize: 25,color: "grey"}}}
                  focused
                  fullWidth
                  sx={{ m: 3 }}
                  type={values.showPass ? "text" : "password"}
                  variant="standard"
                  onChange={(e) => setValues({ ...values, pass: e.target.value })}
                  InputProps={{
                    style: { color: "white", borderBlockColor: "white",marginTop: "35px" },
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

            <LoginButton type="submit" sx={{ textTransform: "none" }}>
              Update Password
            </LoginButton>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginIn;
