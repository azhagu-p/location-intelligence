import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, TextField } from "@mui/material";
import Modal from '@mui/material/Modal';
import '../crumbsDelete/CrumbsDelete.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: 10,
  width: 350,
  height: 50,
  padding: 1,
  color: "white",
  backgroundColor: "#3C4DE7",
}));

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.0.116:8000/api/auth/login", {
        email: values.email,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/country");
      })
      .catch((err) => console.error(err));
  };

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
                focused
                fullWidth
                sx={{ m: 3 }}
                type={values.showPass ? "text" : "password"}
                variant="standard"
                required
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
            <FormControlLabel sx={{ color: "grey" }} control={<Checkbox defaultChecked color="primary" />} label="Remember  me" />
              <Link
                component="button"
                variant="body2"
                onClick={handleOpen}
                underline="hover"
                sx={{ marginLeft: "75px", color: "grey"}}>
                Forgot Password?
              </Link>
            </Box>
            <LoginButton type="submit">Sign in</LoginButton>
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
                        InputLabelProps={{ style: { fontSize: 25, color: "grey" } }}
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
                    <LoginButton onClick={handleClose} type="submit" sx={{ textTransform: "none" }}>
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
