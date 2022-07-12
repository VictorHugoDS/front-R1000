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
import { Post } from '../../../lib/api';
import { useRouter } from 'next/router'


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
  const [resposta, setResposta] = useState('cnpj');
  const router = useRouter();

  const formatDate = (date) =>{
    if(date){
      const day = (date.getDate()+"").padStart(2, "0")
      const mouth = ((date.getMonth()+1)+"").padStart(2, "0")
      const year = date.getFullYear()
      return year+'-'+ mouth
    } else return date
  }

  const onSubmit = async(data) => {
    const values = getValues()
    const resp = {
      "evtInfoContri":{
         "ideEvento":{
            "tpAmb":"",
            "procEmi":"",
            "verProc":""
         },
         "ideContri":{
            "tpInsc":resposta === 'cnpj' ? '1' : '2',
            "nrInsc": values.inscricao,
         },
         "infoContri":{
            "inclusao":{
               "idePeriodo":{
                  "iniValid":formatDate(inicioValidade),
                  "fimValid":formatDate(fimValidade)
               },
               "infoCadastro":{
                  "clasTrib":classificacao,
                  "indEscrituracao":radioOptions.escrituracao === 'sim' ? true : false,
                  "indDesoneracao":radioOptions.desoneracao === 'sim' ? true : false,
                  "indAcordoSemMulta":radioOptions.acordo === 'sim' ? true : false,
                  "indSitPJ":pessoa,
                  "indUniao":"",
                  "dtTransfFinsLucr":"",
                  "dtObito":"",
                  "contato":{
                     "nmCtt":values.nome,
                     "cpfCtt":values.cpf,
                     "foneFixo":"",
                     "foneCel":values.telefone,
                     "email":values.email
                  },
                  "softHouse":[
                    softwareHouse.id
                  ],
                  "infoEFR":{
                     "ideEFR":"",
                     "cnpjEFR":"**"
                  }
               }
            }
         }
      }
   }
   console.log(resp);
   await Post('/contribuinte/', resp).then(response=>console.log(response));
  //  router.push('/eventos');
  }


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
          inicioValidade={inicioValidade}
          setInicioValidade={setInicioValidade}
          fimValidade={fimValidade}
          setFimValidade={setFimValidade}
          resposta={resposta}
          setResposta={setResposta}
          register={register}       />

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
        
          {softwareHouse?.id || 'olá mundo'}
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
            onClick={()=>{router.push('/eventos')}}
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
