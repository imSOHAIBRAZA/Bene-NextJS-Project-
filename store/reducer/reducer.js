import actionTypes from '../constant/constant';
import {imagePack} from "../../Components/Constants"

const INITIAL_STATE = {
    productsList: [
        {
            title: '1',
            imgSrc: imagePack.massageoil
        },
        {
            title: '2',
            imgSrc: imagePack.capsules
        },
        {
            title: '2',
            imgSrc: imagePack.cbdoil500
        }
    ],
    error:null,
    isLodding: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ISLOADING:
            return ({
                ...state,
                isLodding: action.payload
            });

        case actionTypes.GETPRODUCTS:
            return ({
                ...state,
            });
        default:
            return state;
    }
};

