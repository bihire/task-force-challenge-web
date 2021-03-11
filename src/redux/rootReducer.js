import { combineReducers } from 'redux';

import loginReducer from './reducer/signin_reducer';
import allReducer from './reducer/all_reducer';
import doneReducer from './reducer/done_reducer';

const rootReducer = combineReducers({
    done: doneReducer,
    user: loginReducer,
    all: allReducer,
});

export default rootReducer;