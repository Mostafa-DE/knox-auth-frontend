import {Avatar, Button, Container, CssBaseline, TextField} from "@mui/material"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const res = await fetch('http://localhost:8000/api/auth/login/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        })
        if (res.ok) navigate('/')
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div style={{
                margin: "4rem 0 0 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
            >
                <Avatar sx={{margin: "0 0 1rem 0"}}></Avatar>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type='text'
                        name="username"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleChange}
                        label="Username"
                    />
                    <TextField
                        variant="outlined"
                        required
                        onChange={handleChange}
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        sx={{"margin": "1rem 0"}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{margin: "1rem 0 0 0"}}
                    >
                        <Link to='/register'>
                            Go to register page
                        </Link>
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default LoginForm;
