import { combineReducers } from 'redux';

import loginReducer from './reducer/signin_reducer';
import allReducer from './reducer/all_reducer';

const rootReducer = combineReducers({
    user: loginReducer,
    all: allReducer,
});

export default rootReducer;