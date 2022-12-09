import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    registerThunk,
    loginThunk,
    profileThunk,
    logoutThunk
} from "./users-thunk";


const usersReducer = createSlice({
    name: 'users',
    initialState : {
        loading: false,
        users: [],
        currentUser: null,
        error:null
    },
    reducers: {

    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state,action) => {
            state.users = action.payload
        },
        [loginThunk.fulfilled]:(state,action) => {
            state.currentUser = action.payload
            console.log("currentUser")
            console.log(state.currentUser)
        },
        [loginThunk.rejected]:(state,action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [registerThunk.fulfilled]:(state,action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]:(state,action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [profileThunk.fulfilled]:(state,action) => {
            state.currentUser = action.payload
        },
        [profileThunk.rejected]:(state,action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [logoutThunk.fulfilled]:(state,action) => {
            state.currentUser = null
        }


    }
                                 })

export default usersReducer.reducer