import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import style from '../../styles/components/login/style.module.scss';

export default function Login() {

    //const [cpf, setCpf] = useState();

    const cpfValid = (e) =>{
        var strCPF = e;
        strCPF = strCPF.replace('.', '');
        strCPF = strCPF.replace('.', '');
        strCPF = strCPF.replace('-', '');
        var Soma;
        var Resto;
        var i;
        Soma = 0;
        if (strCPF == "00000000000") return false;
    
        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
        }

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={style.paper}>
            <div className={style.login}>
                <h1 className={style.modalTitle}>Login</h1>
                <form  >
                    <TextField
                        className={style.form}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        placeholder='000.000.000-00'
                        id="cpf"
                        label="CPF"
                        autoFocus
                        onChange={(e) =>{cpfValid(e.target.value)}}
                    />
                    <TextField
                        className={style.form}
                        variant="outlined"
                        margin="normal"
                        //required
                        fullWidth
                        name="password"
                        label="senha"
                        type="password"
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