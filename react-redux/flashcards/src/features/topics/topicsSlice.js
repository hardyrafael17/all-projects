import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    topics:{},
    reducers: {
        addTopic(state, action) {
            state.topics = { ...state.topics, [action.payload.id]:{...action.payload, quizIds: []} };
        },
        addQuizIdToTopic(state, action) {
            if (state.topics[action.payload.topicId]) {

                state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            }
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const addTopic = payload => ({ type: "topics/addTopic", payload });
export const addQuizIdToTopic = payload => ({type: "topics/addQuizIdToTopic", payload})
export default topicsSlice.reducer;