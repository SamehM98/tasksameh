import {createSlice} from '@reduxjs/toolkit'

const questionSlice = createSlice({
    name: 'questions',
    initialState:{
        value: []
    },
    reducers:{
        addQuiz: (state,action) => {
            state.value.push(action.payload)
        },
        updateQuiz:(state,action) => {
            state.value = (action.payload)
        }, 
    }
})

export const {addQuiz , updateQuiz} = questionSlice.actions;

export default questionSlice.reducer;