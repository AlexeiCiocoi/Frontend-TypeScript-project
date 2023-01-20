import { Action, ActionWithPayload } from "./reducer.types";

export enum CATEGORY_ACTION_TYPES {
  FETCH_CATEGORIES = "categories/FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS = "categories/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "categories/FETCH_CATEGORIES_FAILED",
  FETCH_PRODUCTS = "categories/FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "categories/FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAILED = "categories/FETCH_PRODUCTS_FAILED",
}

export type CategoriesInitialState = {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
};

export type FetchCategoryStart = Action<CATEGORY_ACTION_TYPES.FETCH_PRODUCTS>;

export type FetchCategorySuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  Product[]
>;

export type FetchCategoryFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_PRODUCTS_FAILED,
  Error
>;


