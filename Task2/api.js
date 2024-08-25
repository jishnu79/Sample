import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:3001" })

export const getDatas = async () => {
    try {
        const res = await API.get('/api/getdata')
        if (res?.data?.success) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateData = async (data) => {
    try {
        const res = await API.post('/api/updateData', data)
        if (res?.data?.success) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}