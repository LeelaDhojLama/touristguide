import { contentConstants } from '../constants';

let initialState = {
   placeDetails:{

   }
}

export function content(state = initialState, action) {
    switch (action.type) {
        case contentConstants.GET_INTRODUCTION:
            return {
                loading: true
            };
        case contentConstants.SUCCESS_INTRODUCTION:
            return {
                ...state,
                placeDetails: action
            };

        default:
            return state
    }
}