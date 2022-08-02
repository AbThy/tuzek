import axios from 'axios';

//const BASE_URL="http://tuzek.hu:8080/addViewCount";
const BASE_URL="http://localhost:8080/addViewCount";

const updateView = async () => {
    return await axios.post(BASE_URL);
}

export{
    updateView
}