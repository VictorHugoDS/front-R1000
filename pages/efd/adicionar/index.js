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
import Radio from '@material-ui/core/Radio';
import { TextField } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Home() {

  const [open,setOpen] = useState(false)
  const handleClose = () =>{
    setOpen(false)
  }


  const { register, handleSubmit,getValues } = useForm();

  const [inicioValidade, setInicioValidade] = useState();
  const [fimValidade, setFimValidade] = useState();

  const [classificacao, setClassificacao] = useState('');
  const [pessoa, setPessoa] = useState('');

  const handleChangeClassificacao = (event) => {
    setClassificacao(event.target.value);
  };

  const handleChangePessoa = (event) => {
    setPessoa(event.target.value);
  };

  const [softwareHouse,setSoftwareHouse] = useState(null)


  const xxx =(eee) =>{console.log(eee)}
  const incricao = null

  return (
    <>
      {/*Necessário se não bugava a página */}
      {open && ( 
      <Modal 
        open={open} 
        handleClose={handleClose} 
        setData={setSoftwareHouse}
        defaultValues={softwareHouse}
      /> 
      )}
      
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
              placeholderText="dd/mm/yyyy"
              maxDate={new Date()}
            />
          </div>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Fim da validade</h4>
            <DatePicker 
              selected={fimValidade} 
              onChange={(date) => setFimValidade(date)}
              dateFormat="dd/MM/yyyy"
              className={style.calendar}
              minDate={new Date()}
              placeholderText="dd/mm/yyyy"
            />
          </div>
        <br/><br/>
        </Container>


        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Informações do Contribuinte
          </Typography>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Classificação do Contribuinte</h4>
            <Select
              labelId="classificacao"
              id="classificacao"
              label="Selecione"
              value={classificacao}
              onChange={handleChangeClassificacao}
              variant='standard'
              className={style.select}
              displayEmpty   
            >
              <MenuItem value="" disabled>
              Selecione
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Situação da Pessoa Jurídica</h4>
            <Select
              labelId="pessoa"
              id="pessoa"
              label="Selecione"
              value={pessoa}
              onChange={handleChangePessoa}
              variant='standard'
              className={style.select}
              displayEmpty   
            >
              <MenuItem value="" disabled>
                Selecione
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <br/><br/>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Obrigatória a Escrituração Contábil</h4>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Sim"
              name="radio-buttons-group"
              row
              
            >
            <div className={style.inputDivided}>
              <FormControlLabel  value="Sim" control={
                <Radio size="small" 
                  color="default"/>
              } label="Sim" />
              <FormControlLabel value="Não" control={
                <Radio size="small"
                  color="default" />
              } label="Não" />
            </div>
            </RadioGroup>
          </div>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Desoneração da Folha pela CPRB</h4>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Sim"
              name="radio-buttons-group"
              row
              
            >
            <div className={style.inputDivided}>
              <FormControlLabel  value="Sim" control={
                <Radio size="small" 
                  color="default"/>
              } label="Sim" />
              <FormControlLabel value="Não" control={
                <Radio size="small"
                  color="default" />
              } label="Não" />
            </div>
            </RadioGroup>
          </div>
          <div className={style.inputDivided}>
            <h4 className={style.subtitulo}>Acordo Internaciona Para Isenção de Multa</h4>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Sim"
              name="radio-buttons-group"
              row
              
            >
            <div className={style.inputDivided}>
              <FormControlLabel  value="Sim" control={
                <Radio size="small" 
                  color="default"/>
              } label="Sim" />
              <FormControlLabel value="Não" control={
                <Radio size="small"
                  color="default" />
              } label="Não" />
            </div>
            </RadioGroup>
          </div>
        </Container>

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Informações Para Contato
          </Typography>
          <div className={style.inputDivided}>
            <h4 className={style.title}>Nome</h4>
            <TextField id="outlined-basic" 
              placeholder='João da Silva'
              variant="standard"
              fullWidth
              size="small"
              {...register("nome")}
            />
          </div>

          <div className={style.inputDivided}>
            <h4 className={style.title}>CPF</h4>
            <TextField id="outlined-basic" 
              placeholder='000.000.000-00'
              variant="standard"
              fullWidth
              size="small"
              {...register("cpf")}
            />
          </div>

          <div className={style.inputDivided}>
            <h4 className={style.title}>Telefone</h4>
            <TextField id="outlined-basic" 
              placeholder='(00) 000000000'
              variant="standard"
              fullWidth
              size="small"
              className={style.textInput}
              {...register("telefone")}
            />
          </div>

          <div className={style.inputDivided}>
            <h4 className={style.title}>E-mail</h4>
            <TextField id="outlined-basic" 
              placeholder='exemplo@email.com'
              variant="standard"
              fullWidth
              size="small"
              {...register("email")}
            />
          </div>
          
        </Container>

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Software House
          </Typography>
          <div className={style.buttonSW}>
            <button variant="contained" onClick={()=>{setOpen(true)}}
            className={style.button}
            label='text'
            >Incluir Software House</button>
          </div>
          
        </Container>

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography  variant="h5" className={style.title} >
            Assinatura
          </Typography>
          <div className={style.buttonSW}>
            <button variant="contained"
            className={style.button}
            label='text'
            >Assinar Documento</button>
          </div>
          
        </Container>
        <br/>
        <Container maxWidth="sm">
        <div className={style.inputDivided}>
            <button variant="contained"
            className={style.buttonOk}
            label='text'
            >Confirmar Cadastro</button>
          </div>          
          <div className={style.inputDivided}>
            <button variant="contained"
            className={style.buttonNotOk}
            label='text'
            >Cancelar Cadastro</button>
          </div>
        </Container>
    </>
  )
}
