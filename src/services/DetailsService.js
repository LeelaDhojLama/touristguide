import BoduhaEnglish from '../helpers/fakejson/BoudhaEnglish.json'
import BoudhaHindi from '../helpers/fakejson/BoudhaHindi.json'
import BoudhanathJapanese from '../helpers/fakejson/BoudhaJapanese.json'

export const contentService = {
    getDetails
};

function getDetails() {

    if(localStorage.getItem("language")==="en"){

        return BoduhaEnglish;
    }else if(localStorage.getItem("language")==="hi"){
        return BoudhaHindi;
    }else if(localStorage.getItem("language")==="jp"){
        return BoudhanathJapanese;
    }

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