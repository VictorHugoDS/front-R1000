import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Select  from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '../../../components/modalsoftwarehouse';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@material-ui/core';

export default function Home() {

  const [open,setOpen] = useState(false)
  const handleClose = () =>{
    setOpen(false)
  }

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { register, handleSubmit,getValues } = useForm();

  const [inicioValidade, setInicioValidade] = useState(new Date());
  const [fimValidade, setFimValidade] = useState(new Date());

  const xxx =(eee) =>{console.log(eee)}
  const incricao = null

  return (
    <>
      {/*Necessário se não bugava a página */}
      {open && ( <Modal open={open} handleClose={handleClose}setData={xxx}/> )}
      
        <CssBaseline />
          <Typography  variant="h4" className={style.titlePage} >
            <strong>
            Cadastro de Contribuinte
            </strong>
          </Typography>
        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Periodo de Validade das informações
          </Typography>

          <div className={style.inputSingleLine}>
            <h4 className={style.subtitulo}>Número de Inscrição</h4>
            <Typography  variant="body1" className={style.title} >
              {incricao || '00.000.000/0000-00'}
            </Typography>
          </div>

          <br/>

          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Início da validade</h4>
            <DatePicker 
              selected={inicioValidade} 
              onChange={(date) => setInicioValidade(date)}
              dateFormat="dd/MM/yyyy"
              className={style.calendar}
            />
          </div>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Fim da validade</h4>
            <DatePicker 
              selected={fimValidade} 
              onChange={(date) => setFimValidade(date)}
              dateFormat="dd/MM/yyyy"
              className={style.calendar}
            />
          </div>

        </Container>

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Informações do Contribuinte
          </Typography>
          <div className={style.buttonSW}>
            <Button variant="contained" onClick={()=>{setOpen(true)}}>Text</Button>
          </div>
        </Container>

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Software House
          </Typography>
          <h4 className={style.subtitulo}>Classificação do Contribuinte</h4>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            variant='standard'
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Container>
        <br/>

    </>
  )
}
