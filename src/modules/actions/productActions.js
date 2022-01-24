import { PRODUCT } from "../types";


/*** READ PRODUCTS ***/

export function readProducts(value){
    return async (dispatch) => {
        try {
            dispatch(getProductSuccess(value))
        } catch (error) {
            console.log("error");
        }
    };
}

const getProductSuccess =(response)=> ({
    type: PRODUCT.READ_PRODUCTS,
    payload: response,
});


export function saveProductCarAction(value){
    return async (dispatch) => {
        try {
            dispatch(saveProductSuccess(value))
        } catch (error) {
            console.log("error");
        }
    };
}

const saveProductSuccess =(response)=> ({
    type: PRODUCT.SAVE_PRODUCT,
    payload: response,
});


export function buyProductsAction(value){
    return async (dispatch) => {
        try {
            dispatch(buyProductSuccess(value))
        } catch (error) {
            console.log("error");
        }
    };
}

const buyProductSuccess =(response)=> ({
    type: PRODUCT.BUY_PRODUCTS,
    payload: response,
})


export function cleanCar(){
    return async (dispatch) => {
        try {
            dispatch(cleanCarSuccess())
        } catch (error) {
            console.log("error");
        }
    };
}

const cleanCarSuccess =()=> ({
    type: PRODUCT.CLEAN_CAR,
})



