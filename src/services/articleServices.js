import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = ()=> {
    const promise = axiosWithAuth().get('http://localhost:5000/api/articles')
        
        const data = promise
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })
    return data;
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.