function checkResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(new Error('server error'))
}

class Api {
    constructor({ baseUrl }) {
        this.baseUrl = baseUrl
    }

    getHeaders() {
        return {
            'Content-Type': 'application/json',
        }
    }

    sendEmail(email) {
        return fetch(`${this.baseUrl}/waitlist/subscribe`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ email }),
        }).then(checkResponse)
    }
}

export const api = new Api({
    baseUrl: 'https://api.sqdfy.com',
})
