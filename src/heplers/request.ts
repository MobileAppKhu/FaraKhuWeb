import { toast } from 'react-toastify'

const BASE_URL = process.env.REACT_APP_API_BASE_URL

export default async function request(
  endpoint: string,
  // eslint-disable-next-line default-param-last
  method: string = 'GET',
  body?: any,
) {
  let status: number
  const reposnse = await fetch(BASE_URL + endpoint, {
    method,
    mode: 'no-cors',

    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Connection: 'keep-alive',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
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
