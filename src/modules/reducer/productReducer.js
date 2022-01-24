import { PRODUCT } from "../types";

const initialState = {
    products: [],
    productInCurse: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT.READ_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };

        case PRODUCT.SAVE_PRODUCT:
            return {
                ...state,
                productInCurse: action.payload,
            };

        case PRODUCT.BUY_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };

        case PRODUCT.CLEAN_CAR:
            return {
                ...state,
                productInCurse: [],
            };



        default:
            return state;
    }
}
