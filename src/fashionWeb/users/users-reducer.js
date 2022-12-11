import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    registerThunk,
    loginThunk,
    profileThunk,
    logoutThunk,
    updateUserThunk, findUserByIdThunk
} from "./users-thunk";
import {findUserById} from "./users-service";


const usersReducer = createSlice({
    name: 'users',
    initialState : {
        loading: false,
        users: [],
        currentUser: null,
        publicUser: null,
        error:null
    },
    reducers: {

    },
    extraReducers: {
        [findUserByIdThunk.fulfilled]:(state,action) => {
            state.publicUser = action.payload
            console.log("publicUser")
            console.log(state.publicUser)
        },
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
        },

        [updateUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const userINdx = state.users.findIndex((t) => t._id === payload._id)
                state.users[userINdx] = {
                    ...state.users[userINdx],
                    ...payload
                }
            }


    }
                                 })

export default usersReducer.reducer