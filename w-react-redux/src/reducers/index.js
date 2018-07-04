import { combineReducers } from 'redux';

const products = (state = [], action) => {
    if (action.type === "ADD"){
        return state.concat([{name: action.product}]);
    }
    return state;
}

export default combineReducers({
    products
});
