import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./comments-service"
import comments from "./comments";

export const findCommentsThunk = createAsyncThunk(
    'findComments', async () =>
    await service.findComments()
)

export const deleteCommentThunk = createAsyncThunk(
    'deleteComment',
    async (commentId) => {
        await service.deleteComment(commentId)
        return commentId
    }
)
export const findSneakersCommentedByUserThunk = createAsyncThunk(
    'findCommentsByUser',
    async(uid) => {
        const comments = await service.findCommentsByUser(uid)
        console.log("THESE ARE THE SNEAKERS OBJECTS ARE commented")
        console.log(comments)
        return comments;
    }
)

export const createCommentThunk = createAsyncThunk(
    'createComment',
    async (comment) => {
        const actualComment = await service.createComment(comment)
        return actualComment
    }
)
