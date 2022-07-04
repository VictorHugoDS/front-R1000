import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import style from '../../styles/components/modal/style.module.scss';
import { TextField } from '@material-ui/core';


export default function softwareHause({open,handleClose}) {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    return (
        <>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            unmountOnExit
        >
        <strong className={style.modalTitle}>
            Informações da Software House
        </strong>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description">
            <TextField id="outlined-basic" label="CNPJ da Software House" />

          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField id="outlined-basic" margin={'dense'} label="CNPJ da Software House" /> */}
          {/* </DialogContentText> */}
          <form className={style.form}>
            <h1>
                asadasd
            </h1>
            <h2>
                asadasd
            </h2>
          </form>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
  }
  