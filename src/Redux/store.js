import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "./features/doctor/doctorsSlice";

export const store = configureStore({
    reducer: {
        doctors: doctorsSlice
    }
})