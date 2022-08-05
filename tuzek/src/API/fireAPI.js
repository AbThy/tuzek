import axios from 'axios';

const BASE_URL="/fire";
//const BASE_URL="http://localhost:8080/fire";

const getFires = async () => {
    return await axios.get(BASE_URL + "/getFires");
}

export{
    getFires
}