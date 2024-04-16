import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const FetchAllFood = createAsyncThunk('foods/FetchAllFoods', async (payload, obj) => {
    try {
        const response = await axios('https://baibolot-front-api.prolabagency.com/api/v1/foo')
        return response.data
    } catch (e) {
        if (e.response) {
            return obj.rejectWithValue(e.response.data)
        }
        return obj.rejectWithValue(e.message)
    }

})



const initialState = {
    data: [],
    loading: false,
    error: ''
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        remove(state, { payload }) {
            const newData = state.data.filter(item => item.id != payload)
            return { ...state, data: newData }
        },
        add(state, action) {
            console.log(action);
            return { ...state, data: [...state.data, action.payload] }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(FetchAllFood.pending, (state, action) => {
                console.log(action);
                console.log('PENDING');
                state.loading = true
            })
            .addCase(FetchAllFood.rejected, (state, { payload }) => {
                console.log(payload);
                console.log('REJECTED');
                state.loading = false
                state.error = payload
            })
            .addCase(FetchAllFood.fulfilled, (state, action) => {
                console.log(action);
                if (Array.isArray(action.payload)) {
                    state.data = action.payload
                } else {
                    state.data = [action.payload]
                }
                console.log('FULLFILED');
                state.loading = false
                state.error = false
            })
    }
})


export default todoSlice.reducer
export const todoActions = todoSlice.actions