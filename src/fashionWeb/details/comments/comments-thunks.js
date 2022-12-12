import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./comments-service"

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

export const createCommentThunk = createAsyncThunk(
    'createComment',
    async (comment) => {
        const actualComment = await service.createComment(comment)
        return actualComment
    }
)
