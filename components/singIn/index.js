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

    const onSubmit = () => {
        router.push("/efd/adicionar")

    };

    // verificar se o cpf é válido 
    //OBS implementar quando fizer o sistema de login
    const cpfValid = async () =>{
        //var strCPF = cpf;   
        console.log(strCPF);

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
        <Container component="main" >
          <CssBaseline />
          <div className={style.paper}>
                <h1 className={style.modalTitle}>Login</h1>
            <div className={style.login}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>CPF</h2>
                    <TextField
                        name='cpf'
                        className={style.form}
                        fullWidth
                        placeholder={'000.000.000-00'}
                        {...register("cpf")}
                    />
                    <h2>Senha</h2>
                    <TextField
                        fullWidth
                        placeholder='Senha'
                        type="password"
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