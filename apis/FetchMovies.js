import axios from 'axios';

export function usingFetch() {
    fetch('https://api.tvmaze.com/shows')
        .then((response) => response.json())
        .then((json) => {
            //console.warn(json);
            return json;
        })
        .catch((error) => {
            console.error(error);
        })
}

export const usingAxios = async () =>  {
    
    axios.get('https://api.tvmaze.com/shows')
        .then(response =>  {
            console.log("data: ", response.data);
            return response.data;
        })
        .catch((error) => {
            return false;
        });
}