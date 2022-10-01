class HTTPClient {
    fetchGetRequest(url) {
        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPostRequest(url) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPutRequest(url) {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    fetchPatchRequest(url) {
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo'
            }),
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
