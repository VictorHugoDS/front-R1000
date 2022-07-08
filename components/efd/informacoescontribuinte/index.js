import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import { useEffect, useState } from 'react';
import SelectClassificacao from '../../select/selectClassificacao';
import SelectSituacao from '../../select/situacao';



export default function InformacoesContribuinte({
    classificacao,
    setClassificacao,
    pessoa,
    setPessoa,
    setRadioOptions,
}) {
  
  const handleChangeClassificacao = (event) => {
    setClassificacao(event.target.value);
  };

  const handleChangePessoa = (event) => {
    setPessoa(event.target.value);
  };

  const [escrituracao,setEscrituracao] = useState('nao')
  const [desoneracao,setDesoneracao] = useState('nao')
  const [acordo,setAcordo] = useState('nao')

  const handleChangeRadio = (event,marcador ) =>{
    const value = event.target.value
    if (marcador === 'acordo') {
      setAcordo(value)
    } else {
      if (marcador === 'desoneracao') {
        setDesoneracao(value)
      } else {
        if (marcador === 'escrituracao') {
          setEscrituracao(value)
        }
      }
    }
  }

  useEffect(()=>{
    setRadioOptions({
      escrituracao,
      desoneracao,
      acordo
    })
  },[escrituracao,desoneracao,acordo])



    return(
        <Container maxWidth="sm" className={style.conteiner}>
        <Typography  variant="h5" className={style.title} >
          Informações do Contribuinte
        </Typography>
        <div className={style.inputDivided}>
          <h4 className={style.subtitulo}>Classificação do Contribuinte</h4>
          <SelectClassificacao
            classificacao={classificacao}
            handleChangeClassificacao={handleChangeClassificacao}
          />
        </div>
        <div className={style.inputDivided}>
          <h4 className={style.subtitulo}>Situação da Pessoa Jurídica</h4>
          <SelectSituacao
            pessoa={pessoa}
            handleChangePessoa={handleChangePessoa}
          />
        </div>
        <br/><br/>
        <div className={style.inputDivided}>
          <h4 className={style.subtitulo}>Obrigatória a Escrituração Contábil</h4>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nao"
            name="radio-buttons-group"
            row
            onChange={(e)=>{handleChangeRadio(e,'escrituracao')}}
          >
          <div className={style.inputDivided}>
            <FormControlLabel  value="sim" control={
              <Radio size="small" 
                color="default"/>
            } label="Sim" />
            <FormControlLabel value="nao" control={
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
            defaultValue="nao"
            name="radio-buttons-group"
            row
            onChange={(e)=>{handleChangeRadio(e,'desoneracao')}}
            
          >
          <div className={style.inputDivided}>
            <FormControlLabel  value="sim" control={
              <Radio size="small" 
                color="default"/>
            } label="Sim" />
            <FormControlLabel value="nao" control={
              <Radio size="small"
                color="default" />
            } label="Não" />
          </div>
          </RadioGroup>
        </div>
        <div className={style.inputDivided}>
          <h4 className={style.subtitulo}>Acordo Internacional Para Isenção de Multa</h4>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nao"
            name="radio-buttons-group"
            row
            onChange={(e)=>{handleChangeRadio(e,'acordo')}}
          >
          <div className={style.inputDivided}>
            <FormControlLabel  value="sim" control={
              <Radio size="small" 
                color="default"/>
            } label="Sim" />
            <FormControlLabel value="nao" control={
              <Radio size="small"
                color="default" />
            } label="Não" />
          </div>
          </RadioGroup>
        </div>
      </Container>
    )
}