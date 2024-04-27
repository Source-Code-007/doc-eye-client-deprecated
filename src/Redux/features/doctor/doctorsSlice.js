import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minConsultationFee: 100,
    maxConsultationFee: 3000,
    availability: [],
    rating: 5,
    sortBy: 'relevance',
}

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        updateMinConsultationFee: (state, action) => {
            state.minConsultationFee = action.payload
        },
        updateMaxConsultationFee: (state, action) => {
            state.maxConsultationFee = action.payload
        },
        updateRating: (state, action) => {
            state.rating = action.payload
        },
        updateAvailability: (state, action) => {
            if (state.availability.includes(action.payload)) {
                state.availability = state.availability.filter(elem => elem != action.payload)
            } else {
                state.availability = [...state.availability, action.payload]
            }
        },
        updateSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        resetState: () => initialState
    }
})

export const { updateMinConsultationFee, updateMaxConsultationFee, updateRating, updateAvailability, updateSortBy, resetState } = doctorsSlice.actions
export default doctorsSlice.reducer