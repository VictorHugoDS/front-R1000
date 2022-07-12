import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'

export const Post = async(url,data) =>{
    let resposta
    await axios.post(BASE_URL+url,{...data}).then(
        res => resposta = res
    )
    return resposta
}

export const GetAll = async (url, setData) => {
    return await axios.get(BASE_URL + url)

}


export const Get = async(url) =>{
    await axios.get(BASE_URL+url)
}
export const api = axios.create({
    baseURL: BASE_URL
})
