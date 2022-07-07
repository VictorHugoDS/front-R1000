import Select  from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from '../../../styles/components/efd/adicionar/style.module.scss';
import { useEffect, useState } from 'react';

export default function SelectClassificacao({classificacao,handleChangeClassificacao}) {

    // Vai ser mudado
    const asyncBackendCall = async() =>{
        return ({
            "quantity_find": 5,
            "data": [
              [
                {
                  "1": "Empresa enquadrada no regime de tributação Simples Nacional com tributação previdenciária substituída"
                },
                {
                  "2": "Empresa enquadrada no regime de tributação Simples Nacional com tributação previdenciária não substituída"
                },
                {
                  "3": "Empresa enquadrada no regime de tributação Simples Nacional com tributação previdenciária substituída e não substituída"
                },
                {
                  "4": "MEI - Micro Empreendedor Individual"
                },
                {
                  "6": "Agroindústria"
                },
                {
                  "7": "Produtor rural pessoa jurídica"
                },
                {
                  "8": "Consórcio simplificado de produtores rurais"
                },
                {
                  "9": "Órgão gestor de mão de obra – OGMO"
                },
                {
                  "10": "Entidade sindical a que se refere a Lei 12.023/2009"
                },
                {
                  "11": "Associação desportiva que mantém clube de futebol profissional"
                },
                {
                  "13": "Banco, caixa econômica, sociedade de crédito, financiamento e investimento e demais empresas relacionadas no parágrafo 1º do art. 22 da Lei 8.212./91"
                },
                {
                  "14": "Sindicatos em geral, exceto aquele classificado no código [10]"
                },
                {
                  "21": "Pessoa física, exceto segurado especial"
                },
                {
                  "22": "Segurado especial"
                },
                {
                  "60": "Missão diplomática ou repartição consular de carreira estrangeira"
                },
                {
                  "70": "Empresa de que trata o Decreto 5.436/2005"
                },
                {
                  "80": "Entidade beneficente de assistência social isenta de contribuições sociais"
                },
                {
                  "85": "Administração direta da União, Estados, Distrito Federal e Municípios; Autarquias e fundações"
                },
                {
                  "99": "Pessoas jurídicas em geral"
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
            labelId="classificacao"
            id="classificacao"
            label="Selecione"
            value={classificacao}
            onChange={handleChangeClassificacao}
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
