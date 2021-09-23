import axios from "axios"

export function getPostData(method = "get", data){
    return axios({
        method : method,
        url : `https://61440844411c860017d25289.mockapi.io/product`,
        data : data
    }).catch(err => {
        console.log(err);
    })

}

export function deletePostData(id){
    return axios({
        method : "delete",
        url : `https://61440844411c860017d25289.mockapi.io/product/${id}`
    }).catch(err => {
        console.log(err);
    })

}

