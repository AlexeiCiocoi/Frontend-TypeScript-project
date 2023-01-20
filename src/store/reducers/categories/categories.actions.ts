import {
  CATEGORY_ACTION_TYPES as actionTypes,
  FetchCategoryFailed,
  FetchCategoryStart,
  FetchCategorySuccess,
  Product,
} from "../../../types/categories.types";
import { Action, ActionWithPayload } from "../../../types/reducer.types";
import { createAction, withMatcher } from "../../../utils/reducer.utils";

export const fetchCategoryStart = withMatcher(
  ():FetchCategoryStart =>
    createAction(actionTypes.FETCH_PRODUCTS)
);

export const fetchCategorySuccess = withMatcher(
  (
    payload: Product[]
  ): FetchCategorySuccess =>
    createAction(actionTypes.FETCH_PRODUCTS_SUCCESS, payload)
);

export const fetchCategoryFailed = withMatcher(
  (
    payload: Error
  ): FetchCategoryFailed =>
    createAction(actionTypes.FETCH_PRODUCTS_FAILED, payload)
);
