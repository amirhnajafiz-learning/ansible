class HTTPClient {
    fetchGetRequest(url) {
        return fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPostRequest(url, jsonBody) {
        return fetch(url, {
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
        return fetch(url, {
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
        return fetch(url, {
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
        return fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }
}
