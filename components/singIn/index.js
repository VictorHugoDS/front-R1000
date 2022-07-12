import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import style from '../../styles/components/login/style.module.scss';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';


export default function SingIn() {

    const { register, handleSubmit } = useForm();

    const router = useRouter();
    const [cpf, setCpf] = useState();

    const onSubmit = () => {
        if(cpf){
            router.push("/eventos")
        }
    };


    const cpfValid = (e) =>{
        var strCPF = e.target.value;
        
        strCPF = strCPF.replace('.', '');
        strCPF = strCPF.replace('.', '');
        strCPF = strCPF.replace('-', '');
        var Soma;
        var Resto;
        var i;
        var repetidos = 0;
        Soma = 0;

        for (i=0; i<10; i++){
            if(strCPF[i] === strCPF[i+1]){
                repetidos +=1;
            }
        }	

        if (repetidos == 10 || strCPF.length > 11) return false;
    
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
                <h1 className={style.modalTitle}>Login</h1>
            <div className={style.login}>

                <h2>CPF</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        className={style.form}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        placeholder={'000.000.000-00'}
                        autoFocus
                        {...register("cpf")}
                        onBlur={(e) =>{setCpf(cpfValid(e))}}
                    />
                    <p className={style.alerta} >{cpf || "CPF incorreto"}</p>
                    <h2>Senha</h2>
                    <TextField
                        className={style.form}
                        variant="outlined"
                        margin="normal"
                        //required
                        fullWidth
                        placeholder='Senha'
                        name="password"
                        type="password"
                        //autoComplete="current-password"
                        //{...register(password)}
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