import DatePicker from "react-datepicker";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import style from '../../../styles/components/efd/adicionar/style.module.scss';


export default function Validade({
    incricao,
    inicioValidade,
    setInicioValidade,
    fimValidade,
    setFimValidade,
}) {
  

    return(
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
    )
}