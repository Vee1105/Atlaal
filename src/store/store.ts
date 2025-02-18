import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./states/ThemeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
