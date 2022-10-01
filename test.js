import HTTPClient from "./index.js";

const httpClient = new HTTPClient();

let fetchGetRequest = httpClient.fetchGetRequest("https://jsonplaceholder.typicode.com/todos/1");
fetchGetRequest.then((json) => {
    console.log(json);
});

let fetchPostRequest = httpClient.fetchPostRequest("https://jsonplaceholder.typicode.com/todos", {
    id: 1,
    title: "Hello",
});
fetchPostRequest.then((json) => {
    console.log(json);
});

let fetchPatchRequest = httpClient.fetchPatchRequest("https://jsonplaceholder.typicode.com/todos/1", {});
fetchPatchRequest.then((json) => {
    console.log(json);
});

let fetchPutRequest = httpClient.fetchPutRequest("https://jsonplaceholder.typicode.com/todos/1", {});
fetchPutRequest.then((json) => {
    console.log(json);
}) ;

let fetchDeleteRequest = httpClient.fetchDeleteRequest("https://jsonplaceholder.typicode.com/todos/1");
fetchDeleteRequest.then((json) => {
    console.log(json);
});
