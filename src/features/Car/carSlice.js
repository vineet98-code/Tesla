import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model X", "Model 3", "Model Y"]
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducer: {}
});

export const selectCar = state => state.car.cars;

export default carSlice.reducer;
