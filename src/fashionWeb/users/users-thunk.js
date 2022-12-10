import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, logout, findUserById} from "./users-service";
import {register,login, profile, updateUser} from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (user) => await findUserById(user)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)
export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)
export const profileThunk = createAsyncThunk(
    'profile',
    async (user) => await profile()
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (userUpdate) => {
        const updatedUser = await updateUser(userUpdate)
        return updateUser;
    }
)