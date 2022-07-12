import DatePicker from "react-datepicker";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState } from "react";
import { TextField } from '@material-ui/core';


export default function Validade({
  inicioValidade,
  setInicioValidade,
  fimValidade,
  setFimValidade,
  resposta,
  setResposta,
  register
}) {

  


  return (
    <Container maxWidth="sm" className={style.conteiner}>
      <Typography variant="h5" className={style.title} >
        Selecione o tipo de Inscrição
      </Typography>

      <div className={style.inputDivided}>
        <h4 className={style.subtitulo}>Selecione tipo de Inscrição</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="cnpj"
          name="radio-buttons-group"
          row
          onChange={(e) => { setResposta(e.target.value) }}
        >
          <div className={style.inputDivided}>
            <FormControlLabel value="cpf" control={
              <Radio size="small"
                color="default" />
            } label="CPF" />
            <FormControlLabel value="cnpj" control={
              <Radio size="small"
                color="default" />
            } label="CNPJ" />
          </div>
        </RadioGroup>
      </div>
      <div className={style.inputSingleLine}>
        {resposta === 'cpf' ? (
          <>
            <h4 className={style.subtitulo}>Número Inscrição(CPF)</h4>
            <TextField id="outlined-basic"
              placeholder='000.000.000-00'
              variant="standard"
              fullWidth
              size="small"
              {...register("inscricao")}
            />
          </>
        ) : (
          <>
            <h4 className={style.subtitulo}>Número Inscrição(CNPJ)</h4>
            <TextField id="outlined-basic"
              placeholder='00.000.000/0000-00'
              variant="standard"
              fullWidth
              size="small"
              {...register("inscricao")}
            />
          </>
        )}
      </div>


      <br /><br /><br />

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
      <br /><br />
    </Container>
  )
}