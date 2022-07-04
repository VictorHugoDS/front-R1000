import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Modal from '../components/modalsoftwarehouse';

export default function Home() {

  const [open,setOpen] = useState(false)
  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <>
        {/*Necessário se não bugava a página */}
        {open && ( <Modal open={open} handleClose={handleClose}/>)}
       
        <Button variant="contained" color="primary" onClick={()=>{
          setOpen(true)
        }}>
          Primary
        </Button>
    </>
  )
}
