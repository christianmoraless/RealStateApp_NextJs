import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com/';
export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers:{
            'X-RapidAPI-Key': 'b914e04e01mshe4f90d9c16f9094p1d6badjsn96f78036b140',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}

