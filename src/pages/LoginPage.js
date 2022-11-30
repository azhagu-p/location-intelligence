import React, {useState} from "react";
import {Container, Grid, Paper, TextField, Button, InputAdornment, IconButton} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/Visibility'
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const [values , setValues] = useState({
        email:"",
        pass:"",
        showPass: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://192.168.0.112:8000/api/token/", {
            email: values.email,
            password: values.pass
        }).then(res => {
            localStorage.setItem("token", res.data.access);
            navigate("/dashboard")
        }).catch(err => console.error(err))
    }

    const handlePassVisibility = () => {
      setValues({
        ...values,
          showPass: !values.showPass,
      })
    };

    return (
        <div className='home'>
            <Container maxWidth="sm">
                <Grid container spacing={2} direction="column" justifyContent="center" style={{minHeight: "100vh"}}>
                    <Paper elevation={2} sx={{padding: 5}}>
                        <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <TextField type="text" fullWidth label="Enter your UserName"
                                           placeholder="Enter UserName" variant="outlined"
                                           required
                                           onChange={(e) => setValues({...values, email:e.target.value})} />
                            </Grid>

                            <Grid item>
                                <TextField
                                    type={values.showPass ? "text" : "password"}
                                    fullWidth
                                    label="Password"
                                    placeholder="Password"
                                    variant="outlined"
                                    required
                                    onChange={(e) => setValues({...values, pass:e.target.value})}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handlePassVisibility}
                                                    aria-label="toggle password"
                                                    edge="end"
                                                >
                                                    {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item>
                                <Button type="submit" fullWidth variant="contained">Sign In</Button>
                            </Grid>

                        </Grid>
                    </form>
                    </Paper>
                </Grid>
            {/*    <input onClick={() => { dispatch({ type:"login" }) }} type="submit"/>*/}
        </Container>
</div>
)
}

export default Login