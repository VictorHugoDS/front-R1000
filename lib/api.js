import axios from 'axios';

const BASE_URL = 'something'

export const Post = async(url,data) =>{
    let resposta
    await axios.post(BASE_URL+url,{data}).then(
        res => resposta = res
    )
    return resposta
}

export const GetAll = async(url,setData) =>{
    await axios.get(BASE_URL+url).then(
        res => setData(res.data)
    )
}


export const Get = async(url) =>{
    await axios.get(BASE_URL+url)
}