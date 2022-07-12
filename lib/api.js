import axios from 'axios';

const BASE_URL = 'something'

export const Post = async (url, data) => {
    await axios.post(BASE_URL + url, { data }).then(
        res => console.log(res)
    )
}

export const GetAll = async (url, setData) => {
    await axios.get(BASE_URL + url).then(
        res => setData(res.data)
    )
}

export const api = axios.create({
    baseURL: BASE_URL
})