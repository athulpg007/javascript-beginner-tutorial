const axios = require("axios");

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        console.log("Finished attempting to fetch data.");
    }
};

getData();