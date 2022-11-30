import React, { useState } from "react";
import "./Login.css";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import mail from "../assets/svg/sms.svg";
import lock from "../assets/svg/lock.svg";

import Frame from "../assets/svg/Frame.svg";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled, Checkbox } from "@mui/material";
import Link from "@mui/material/Link";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
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
                <Box className="form-container">
                    <Box>
                        <img src={Frame} alt="logo" style={{ height: 102, width: 239 }} />
                        <h2 className="h1">Curate,Visualize,Activate</h2>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box className="form">
                            <Input
                                fullWidth
                                placeholder="Your mail"
                                sx={{ color: "white", margin: "20px" }}
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <img src={mail} alt="mail" />
                                    </InputAdornment>
                                }
                                onChange={(e) =>
                                    setValues({ ...values, email: e.target.value })
                                }
                            />

                            <Input
                                fullWidth
                                type="password"
                                placeholder="Password"
                                sx={{ color: "white", margin: "20px" }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <img src={lock} alt="lock" />
                                    </InputAdornment>
                                }
                                onChange={(e) => setValues({ ...values, pass: e.target.value })}
                            />
                        </Box>
                        <Box className="checkbox">
                            <FormControlLabel
                                label="Remember me"
                                control={<Checkbox value="" sx={{ color: "white" }} />}
                            />
                            <Link href="#" ml={10}>
                                Forget Password
                            </Link>
                        </Box>
                        <ColorButton type="submit">Sign in</ColorButton>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginIn;