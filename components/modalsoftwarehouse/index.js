import React, { ushandleSubmiteEffect, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import style from '../../styles/components/modal/style.module.scss';
import { TextField,Snackbar } from '@material-ui/core';
import { set, useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { Post } from '../../lib/api';
import { Alert } from '@material-ui/lab';

export default function softwareHause({ open, handleClose, setData, defaultValues }) {

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const { register, handleSubmit, getValues, setValue } = useForm();
  const [error,setError] = useState(false);

  const onSubmit = (data) => {
    const values = getValues()
    const resp = {
      "nmRazao":values.razao,
      "nmContato":values.contato,
      "telefone":values.telefone,
      "email":values.email,
      "cnpjSoftHouse":values.cnpj
   }
   try {
    const id = Post('/softhouse',resp)
    // console.log({...resp,id:'response?.data?.id_inserted'})
    id.then((response)=>{
      setData({...resp,id:response?.data?.id_inserted})
    }).catch(err=>{
      console.log("teste")
      setError(true);
    })

   } catch (error) {
    throw new Error("error")
   }
    
    
    handleClose()
  }

  const exitTime = () => {
    setData({ ...getValues(), exited: true })
    handleClose()
  }

  useEffect((() => {
    if (open && defaultValues) {
      const { id,cnpjSoftHouse, telefone, nmRazao, nmContato, email } = defaultValues
      setValue('cnpj', cnpjSoftHouse)
      setValue('telefone', telefone)
      setValue('razao', nmRazao)
      setValue('contato', nmContato)
      setValue('email', email)
      console.log(id)
    }
  }), [open])

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={exitTime}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        unmountOnExit
      >

        <strong className={style.modalTitle}>
          <h3>Informações da Software House</h3>
        </strong>
        <DialogContent>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <div className={style.input}>
              <h5 className={style.title}>CNPJ da Software House</h5>
              <TextField id="outlined-basic"
                variant="outlined"
                placeholder='00.000.000/0000-00'
                fullWidth
                size="small"
                {...register("cnpj")}
              />
            </div>

            <div className={style.input}>
              <h5 className={style.title}>Telefone</h5>
              <TextField id="outlined-basic"
                placeholder='(99) 9 9999 - 9999'
                variant="outlined"
                fullWidth
                size="small"
                {...register("telefone")}
              />
            </div>

            <br />

            <div className={style.inputFull}>
              <h5 className={style.title}>Razão Social</h5>
              <TextField id="outlined-basic"
                variant="outlined"
                fullWidth
                size="small"
                placeholder='exemplo industrias ltda.'
                {...register("razao")}
              />
            </div>

            <br />
            <div className={style.inputFull}>
              <h5 className={style.title}>Nome Contato na Empresa</h5>
              <TextField id="outlined-basic"
                placeholder='Nome para contato'
                variant="outlined"
                fullWidth
                size="small"
                {...register("contato")}
              />
            </div>

            <br />
            <div className={style.inputFull}>
              <h5 className={style.title}>Endereço Eletrônico (e-mail)</h5>
              <TextField id="outlined-basic"
                placeholder='exemplo@email.com'
                variant="outlined"
                fullWidth
                size="small"
                {...register("email")}
              />
            </div>
            <DialogActions style={{ justifyContent: "space-between" }}>

              <button onClick={() => { handleClose() }} className={style.buttonCancel}>
                Cancelar
              </button>

              <button type="submit" className={style.buttonConfirm}>
                Finalizar
              </button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {<Alert severity="error"> Erro</Alert>}

    </>
  )
}

softwareHause.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setData: PropTypes.func,
  defaultValues: PropTypes.shape({
    cnpj: PropTypes.string,
    telefone: PropTypes.string,
    razao: PropTypes.string,
    contato: PropTypes.string,
    email: PropTypes.string
  }),
}

softwareHause.defaultProps = {
  setData: () => { },
  defaultValues: {},
}