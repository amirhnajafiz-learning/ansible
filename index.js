class HTTPClient {
    fetchGetRequest(url) {
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(json => {
                return json
            })
    }

    fetchPostRequest(url, jsonBody) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(jsonBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(json => {
                return json
            })
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
