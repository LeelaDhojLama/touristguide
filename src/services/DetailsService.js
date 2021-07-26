import BoduhaEnglish from '../helpers/fakejson/BoudhaEnglish.json'

export const contentService = {
    getDetails
};

function getDetails() {

    return BoduhaEnglish;

    // return fetch(, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //
    //         return user;
    //     });
}