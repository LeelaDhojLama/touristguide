import { combineReducers } from 'redux';

import { content } from './ContentReducer';

const rootReducer = combineReducers({
   content
});

export default rootReducer;