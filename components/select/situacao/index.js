import Select  from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import { useEffect, useState } from 'react';

export default function SelectSituacao({pessoa,handleChangePessoa}) {

    // Vai ser mudado
    const asyncBackendCall = async() =>{
        return ({
            "quantity_find": 19,
            "data": [
              [
                {
                  "0": "situaNormal"
                },
                {
                  "1": "extinto"
                },
                {
                  "2": "fusao"
                },
                {
                  "3": "cisao"
                },
                {
                  "4": "incorporacao"
                }
              ]
            ],
            "code": 200,
            "message": "Deu boa!"
          })
    }

    const [resp,setResp]=useState()

    useEffect(()=>{
        asyncBackendCall().then((e)=>{
            setResp(e.data)
        })
        
    },[])

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
