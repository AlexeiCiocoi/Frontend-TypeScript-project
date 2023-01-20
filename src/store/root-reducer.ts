import { combineReducers } from "redux";
import { categoriesReducer } from "./reducers/categories/categories.reducer";

export const rootReducer = combineReducers({
    category: categoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>