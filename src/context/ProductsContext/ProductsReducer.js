
const products = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":

            return {
                ...state,
                products: action.payload,
            };
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        default:
            return state;
    }
};

export default products;
