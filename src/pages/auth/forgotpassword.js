import React, { useState } from "react";
import "./Login.css";
import { Box, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import mail from "../../assets/svg/sms.svg";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  return (
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
                  InputLabelProps={{style: {fontSize: 25,color: "grey"}}}
                  focused
                  fullWidth
                  sx={{ m: 3 }}
                  type="email"
                  variant="standard"
                  InputProps={{
                    style: { color: "white", marginTop:"35px"},
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

            <LoginButton type="submit" sx={{ textTransform: "none" }}>
              Forgot Password
            </LoginButton>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginIn;
