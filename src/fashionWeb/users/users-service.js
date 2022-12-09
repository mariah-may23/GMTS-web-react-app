import axios from "axios";
const BASE_URL = 'http://localhost:4000'
export const createUser = async() => {

}
export const findAllUsers = async () => {
    const response = await axios.get('http://localhost:4000/users')
    return response.data

}
export const register = async (user) => {
    const response = await axios.post( `${BASE_URL}/register`,user)
    return response.data
}
export const login = async (user) => {
    const response = await axios.post( `${BASE_URL}/login`,user)
    return response.data
}
export const profile = async () => {
    const response = await axios.post( `${BASE_URL}/profile`,profile)
    return response.data
}
export const logout = async () => {
    const response = await axios.post( `${BASE_URL}/logout`,logout)
    return response.data
}
export const deleteUser = async(uid) => {}

export const updateUser = async  (userUpdates) => {
     const response = await axios.put(`${BASE_URL}/users/${userUpdates._id}`, userUpdates);
     return userUpdates;
}