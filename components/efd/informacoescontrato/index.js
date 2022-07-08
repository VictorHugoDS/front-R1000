import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import style from '../../../styles/components/efd/adicionar/style.module.scss';

import { TextField } from '@material-ui/core';

export default function InformacoesContato({register}) {
    return(

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
              className={style.input}
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
    )
}
