import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";


export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz(state, action) {
            state.quizzes = {
                ...state.quizzes,
                [action.payload.id]: { ...action.payload }
            }
        }
    }
});

export const addQuizThunk = createAsyncThunk(
    "quizzes/newQuiz",
    (payload, thunkAPI) => {
        const quizId = payload.id;
        const topicId = payload.topicId;
        thunkAPI.dispatch({type: "quizzes/addQuiz", payload});
        thunkAPI.dispatch(addQuizIdToTopic({quizId, topicId}));
    }
);
export const selectQuizzes = state => state.quizzes.quizzes;
export default quizzesSlice.reducer;