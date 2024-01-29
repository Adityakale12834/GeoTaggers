import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStreetViewData = createAsyncThunk("fetchStreetViewData",async () => {
    const response = await fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6BAqcdkYoGU9NzFRWF_kNy37j7gVCnzo&callback=initialize&v=weekly");
    return response.json();
});

    const streetviewSlice = createSlice({
        name : "streetView",
        initialState : {
            data : null,
            status : 'idle',
            error : null,
        },
        extraReducers : (builder) => {
            builder.addCase(fetchStreetViewData.pending, (state) => {
                state.status = 'loading';
            });
            builder.addCase(fetchStreetViewData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            });
            builder.addCase(fetchStreetViewData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
        }
    })

    export default streetviewSlice.reducer;