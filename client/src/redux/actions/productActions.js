import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/products');
        dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error.message });
    }
};
