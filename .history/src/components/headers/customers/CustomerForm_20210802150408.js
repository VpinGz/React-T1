import React from 'react';

const CustomerForm = () =>{

    const element = document.querySelector('#post-request-set-headers .article-id');
    const article = { title: 'Axios POST Request Example' };
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
    axios.post('https://reqres.in/api/articles', article, { headers })
        .then(response => element.innerHTML = response.data.id);
}
export default CustomerForm;
