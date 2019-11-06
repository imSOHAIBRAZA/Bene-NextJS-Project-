import actionTypes from '../constant/constant';

export const getProducts = () => {
 
    return (dispatch) => {
        dispatch({
                type: actionTypes.GETPRODUCTS, 
             
            })
    }
}