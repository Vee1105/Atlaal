import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
    mode: "Dark" | "Light" | "Midnight";
}

const StoreTheme = localStorage.getItem("theme");

const initialState: ThemeState = {
    mode:
        StoreTheme === "Light" ||
        StoreTheme === "Midnight" ||
        StoreTheme === "Dark"
            ? StoreTheme
            : "Dark",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<"Light" | "Dark" | "Midnight">) => {
            state.mode = action.payload;
            localStorage.setItem("theme", action.payload);
        },
    },
});


export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: ThemeState }) => state.theme;
export default themeSlice.reducer;