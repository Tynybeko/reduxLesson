import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    data: [],
    loading: false,
    error: false
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        remove(state, {payload}) {
            const newData = state.data.filter(item => item.id != payload)
            return {...state, data: newData}
        },
        add(state, action) {
            console.log(action);
            return {...state, data: [...state.data, action.payload]}
        }
    }
})


export default todoSlice.reducer
export const todoActions = todoSlice.actions