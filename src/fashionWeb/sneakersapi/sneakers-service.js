import axios from "axios";


const SEARCH_URL = 'https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=yeezy&limit=5?';

export const findSneakerBySearchTerm = async (term) => {

//    const response = await axios.get('https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=yeezy&limit=5?')
//    return response.data;

    const options = {
          method: 'GET',
          url: 'https://sneaker-database-stockx.p.rapidapi.com/getproducts',
          params: {keywords: 'yeezy', limit: '5'},
          headers: {
            'X-RapidAPI-Key': '389bc1f3cdmsh6009a93e5c1e541p10147ajsnd8f843773938',
            'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
          }
        };


    axios.request(options).then(res => {
        console.log(res.data);
        return res.data
    }).catch(function (error) {
        console.log("error occurring");
        console.error(error);
    });




}



