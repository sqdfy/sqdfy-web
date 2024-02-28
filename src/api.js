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

  subscribeForNewsletter(email) {
    return fetch(`${this.baseUrl}/waitlist/subscribe`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email }),
    }).then(checkResponse)
  }

  unsubscribeFromNewsletter(id) {
    return fetch(`${this.baseUrl}/waitlist/unsubscribe`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ id }),
    }).then(checkResponse)
  }
}

export const api = new Api({
  baseUrl: 'https://api.sqdfy.app',
})
