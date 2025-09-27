import React, { useReducer } from "react";


export const initialState = { cart: [] };

// Reducer function
export function reducer(state, action) {
    switch (action.type) {
        case "ADDTOCART":
            return { cart: [...state.cart, action.product] }

        case "REMOVE":
            let index = state.cart.findIndex(item=> item.id === action.id);
            const updateCart =[...state.cart]
            updateCart.splice(index,1);
            return {cart: updateCart};

        case "CLEAR":
            return { cart: [] };

        default:
            return state;
    }
}