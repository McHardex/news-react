

const getApi = (method, url, payload, accessToken) => {
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': accessToken
    },
    method: method,
    body: JSON.stringify(payload),
  })
}

export { getApi }