import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:3001" })

export const sentText = async (data: any) => {
    try {
        const res = await API.post('/api/createMsg', data)
        if (res.data.success) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const getText = async () => {
    try {
        const res = await API.get('/api/getMsg')
        if (res.data.success) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}