import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    consultationFeeMin: 100,
    consultationFeeMax: 3000,
    availability: '',
    rating: '',
    sortBy: '', // popularity, low to high (fees), high to low (fees), experience
}

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        
    }

})
export const { } = doctorsSlice.actions
export default doctorsSlice.reducer