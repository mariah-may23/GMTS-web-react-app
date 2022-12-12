import axios from "axios";
const BASE_URL = 'http://localhost:4000/comments'


export const createComment = async (comment) => {
    const response = await axios.post(BASE_URL, comment)
    return response.data;
}

export const findComments = async () => {
    const response = await axios.get(BASE_URL);
    const comments = response.data;
    return comments;
}

export const deleteComment = async (cid) => {
    const response = await axios.delete(`${BASE_URL}/${cid}`)
    return response.data
}
