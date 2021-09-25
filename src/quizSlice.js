import {createSlice} from '@reduxjs/toolkit'

const questionSlice = createSlice({
    name: 'questions',
    initialState:{
        value: []
    },
    reducers:{
        addQuiz: (state,action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addQuiz} = questionSlice.actions;

export default questionSlice.reducer;