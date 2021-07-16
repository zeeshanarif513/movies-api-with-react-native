import axios from 'axios';

const END_POINT = 'https://api.tvmaze.com/shows';

export async function usingFetchAPI() {

    try {
        const response = await fetch(END_POINT);
        const data = await response.json();

        if (data) {

            console.log("API Response using fetch");

            return data;
        }
        else {
            return "No data found"
        }

    } catch (error) {
        return error.message;
    }
}

export async function usingAxiosAPI() {

    try {
        const response = await axios.get(END_POINT);

        if (response.data) {
            console.log("API Response using axios");

            return response.data;
        }
        else {
            return "No data found"
        }
    } catch (error) {
        return error.message;
    }
}