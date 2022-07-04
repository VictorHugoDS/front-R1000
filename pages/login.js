import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import style from '../styles/components/login/style.module.scss';

export default function login() {

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={style.paper}>
            <div className={style.login}>
                <Typography  component="h1" variant="h5">
                    <h1 className={style.title}>Login</h1>
                </Typography>
                <form  >
                    <TextField
                        className={style.form}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="cpf"
                        label="CPF"
                        autoFocus
                        onClick={(e) => {
                            console.log(e.target.value)
                        }}
                    />
                    <TextField
                        className={style.form}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className={style.submit}
                    >
                        Entrar
                    </Button>
                </form>
            </div>
          </div>
        </Container>
      );
}