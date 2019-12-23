import HomeReducer from '../../pages/home/HomeReducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    HomePageDetails: HomeReducer
});

export default RootReducer;