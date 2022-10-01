# HTTP Client

Make easy HTTP requests with JavaScript.

## How to use?

First install the latests version of package:

```shell
npm i --save amirhnajafiz21-http-client
```

After that create a HTTP client and fetch your requests.

```JavaScript
// importing http client
import HTTPClient from "amirhnajafiz21-http-client";

// creating a new http client
const httpClient = new HTTPClient();
```

### get

```JavaScript
let fetchGetRequest = httpClient.fetchGetRequest("https://jsonplaceholder.typicode.com/todos/1");
fetchGetRequest.then((json) => {
    console.log(json);
});
```

### post

```JavaScript
let fetchPostRequest = httpClient.fetchPostRequest("https://jsonplaceholder.typicode.com/todos", {
    id: 1,
    title: "Hello",
});
fetchPostRequest.then((json) => {
    console.log(json);
});
```

### patch

```JavaScript
let fetchPatchRequest = httpClient.fetchPatchRequest("https://jsonplaceholder.typicode.com/todos/1", {});
fetchPatchRequest.then((json) => {
    console.log(json);
});
```

### put

```JavaScript
let fetchPutRequest = httpClient.fetchPutRequest("https://jsonplaceholder.typicode.com/todos/1", {});
fetchPutRequest.then((json) => {
    console.log(json);
});
```

### delete

```JavaScript
let fetchDeleteRequest = httpClient.fetchDeleteRequest("https://jsonplaceholder.typicode.com/todos/1");
fetchDeleteRequest.then((json) => {
    console.log(json);
});
```
