import {contentConstants} from '../constants'
import {contentService} from '../services'

export const contentActions = {
    getIntroduction
};

function getIntroduction() {
    return dispatch => {
        dispatch(request());
        dispatch(success(contentService.getDetails()));

        // contentService.getDetails()
        //     .then(
        //         introduction => {
        //             dispatch(success(introduction));
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //         }
        //     );
    };
    function request(content) { return { type: contentConstants.GET_INTRODUCTION } }
    function success(content) { return { type: contentConstants.SUCCESS_INTRODUCTION, content } }
    function failure(error) { return { type: contentConstants.FAILURE_INTRODUCTION, error } }
}