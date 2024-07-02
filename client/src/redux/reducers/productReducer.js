const initialState = {
    products: [],
    loading: true,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: false, products: action.payload };
        case 'PRODUCT_LIST_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export default productReducer;
