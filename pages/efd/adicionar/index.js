import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '../../../components/modalsoftwarehouse';
import InformacoesContato from '../../../components/efd/informacoescontrato';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import InformacoesContribuinte from '../../../components/efd/informacoescontribuinte';
import Validade from '../../../components/efd/validadeinformacoes';

export default function Home() {

  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  const { register, handleSubmit, getValues } = useForm();
  const [inicioValidade, setInicioValidade] = useState();
  const [fimValidade, setFimValidade] = useState();
  const [classificacao, setClassificacao] = useState('');
  const [pessoa, setPessoa] = useState('');
  const [softwareHouse, setSoftwareHouse] = useState(null);
  const [radioOptions, setRadioOptions] = useState(null);

  const onSubmit = (data) => {
    const resp = {
      inicioValidade,
      fimValidade,
      classificacaoContribuinte: classificacao,
      situacaoPessoaJuridica: pessoa,
      ...radioOptions,
      softwareHouse: {
        ...softwareHouse
      },
      informacoesContribuinte: {
        ...getValues()
      },
    }
    console.log(resp)
  }



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
      <Typography variant="h4" className={style.titlePage} >
        <strong>
          Cadastro de Contribuinte
        </strong>
      </Typography>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Validade
          incricao={incricao}
          inicioValidade={inicioValidade}
          setInicioValidade={setInicioValidade}
          fimValidade={fimValidade}
          setFimValidade={setFimValidade}
        />

        <InformacoesContribuinte
          classificacao={classificacao}
          setClassificacao={setClassificacao}
          pessoa={pessoa}
          setPessoa={setPessoa}
          setRadioOptions={setRadioOptions}
        />

        <InformacoesContato
          register={register}
        />

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography variant="h5" className={style.title} >
            Software House
          </Typography>
          <div className={style.buttonSW}>
            <button variant="contained" onClick={() => { setOpen(true) }}
              className={style.button}
              label='text'
              type='button'
            >Incluir Software House</button>
          </div>

        </Container>

        <Container maxWidth="sm" className={style.conteiner}>
          <Typography variant="h5" className={style.title} >
            Assinatura
          </Typography>
          <div className={style.buttonSW}>
            <button variant="contained"
              className={style.button}
              label='text'
              type='button'
              style={{ width: "215px" }}
            >Assinar Documento</button>
          </div>

        </Container>
        <br />
        <Container maxWidth="sm" style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px",
          paddingBottom: "20px",
        }}>
          <button
            className={style.buttonNotOk}
            label='text'
          >Cancelar</button>

          <button variant="contained"
            className={style.buttonOk}
            label='text'
            type="submit"
          >Confirmar</button>
        </Container>
      </form>
    </>
  )
}
