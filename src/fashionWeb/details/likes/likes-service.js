import axios from "axios";
const BASE_URL = 'http://localhost:4000/likes'


export const createLike = async (like) => {
    const response = await axios.post(BASE_URL, like)
    return response.data;
}
