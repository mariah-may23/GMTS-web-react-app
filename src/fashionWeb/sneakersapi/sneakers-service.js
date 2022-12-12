import axios from "axios";


//const SEARCH_URL = 'https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=yeezy&limit=5?';

export const findSneakerBySearchTerm = async (term) => {

//    const response = await axios.get('https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=yeezy&limit=5?')
//    return response.data;

    const response = await axios.request(
        {
            method: 'GET',
            url: `https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=+${term}&limit=12?`,
            headers: {
                'X-RapidAPI-Key': '6c56ba573amsheeaa55c22cbb547p14f36ajsn6f8e46bc0b35',
                'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
            }
        }
    );

    console.log(response.data);
    return response.data;

    // axios.request(options).then(res => {
    //     console.log(res.data);
    //     return res.data
    // }).catch(function (error) {
    //     console.log("error occurring");
    //     console.error(error);
    // });
    // console.log("TESTSSS")

//    return response;



}



