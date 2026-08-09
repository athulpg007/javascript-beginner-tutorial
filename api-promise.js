const axios = require("axios");

const data = axios.get("https://jsonplaceholder.typicode.com/posts/1");
data.then(response => {
    console.log(response.data);
}).catch(error => {
    console.error('Error fetching data:', error);
});
