import Select  from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import { useEffect, useState } from 'react';
import { GetAll } from '../../../lib/api';

export default function SelectSituacao({pessoa,handleChangePessoa}) {
  
  const [resp,setResp]=useState()
  
  useEffect(() =>{
    const asyncBackendCall = async () => {
      await GetAll('/contribuinte/situacaopj',setResp)
    }
    
    asyncBackendCall();
    console.log(resp)
  }, [])

    return(
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
            {resp?.[0].map((obj)=>(
                    Object.keys(obj).map((key)=>{
                    return(
                        <MenuItem value={key}>
                            {obj[key]}
                        </MenuItem>
                    )
                })
            ))}
          </Select>
    )
    
}
