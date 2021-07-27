import { contentConstants } from '../constants';
import {contentService} from "../services";

let initialState = {
   placeDetails:{

   }
}

export function contentReducers(state = initialState, action) {
    switch (action.type) {
        case contentConstants.GET_INTRODUCTION:
            return {
                loading: true
            };
        case contentConstants.SUCCESS_INTRODUCTION:
            console.log(action.content)
            return {
                ...state,
                placeDetails: action.content
            };

        default:
            return state
    }
}