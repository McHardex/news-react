import fetch from 'unfetch';

export default function getApi(method, url, data, access_token){
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': access_token
    },
    method: method,
    mode: 'CORS',
    body: JSON.stringify(data),
  })
}
