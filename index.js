class HTTPClient {
    fetchGetRequest(url) {
        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPostRequest(url, jsonBody) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(jsonBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPutRequest(url, jsonBody) {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(jsonBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPatchRequest(url, jsonBody) {
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(jsonBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchDeleteRequest(url) {
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }
}
