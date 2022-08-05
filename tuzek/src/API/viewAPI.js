import axios from 'axios';

const BASE_URL="/viewCount";
//const BASE_URL="http://localhost:8080/viewCount";

const updateView = async () => {
    let fd = new FormData();
    fd.append("count", 1);
    return await axios.post(BASE_URL + "/update", fd);
}

export{
    updateView
}