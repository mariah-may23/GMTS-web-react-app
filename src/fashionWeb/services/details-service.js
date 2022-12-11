import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const updateLike = async (details) => {
    const response = await axios.put(`${BASE_URL}/${details._id}`, details);
    return details;
}

