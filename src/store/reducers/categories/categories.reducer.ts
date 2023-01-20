import { AnyAction } from "redux"
import { CategoriesInitialState , CATEGORY_ACTION_TYPES as actionTypes } from "../../../types/categories.types"

const initialState: CategoriesInitialState = {
    products: [],
    isLoading: false,
    error: null


}

export const categoriesReducer = (state = initialState ,action: AnyAction ) =>{
    
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS : 
            return {...state , products: action.payload}

    }
}