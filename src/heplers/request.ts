import { toast } from 'react-toastify'

const BASE_URL = process.env.REACT_APP_API_BASE_URL
// const BASE_URL = 'google.com'
export default async function request(
  endpoint: string,
  // eslint-disable-next-line default-param-last
  method: string = 'GET',
  body?: any,
) {
  let status: number
  const reposnse = await fetch(BASE_URL + endpoint, {
    method,
    // mode: 'no-cors',
    headers: {
      // Accept: '*/*',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      status = response.status
      return response.json()
    })
    .then((responseJSON) => {
      if (status >= 200 && status < 300) return { responseJSON, status }

      toast.error(responseJSON.message)
      return { responseJSON, status }
    })
    .catch((res) => {
      toast.error('Please log in')
      return { responseJSON: res, status }
    })
  return reposnse
}
