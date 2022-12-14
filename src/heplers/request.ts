import { toast } from 'react-toastify'

const BASE_URL = process.env.REACT_APP_API_BASE_URL
// const BASE_URL = 'google.com'
export default async function request(
  endpoint: string,
  // eslint-disable-next-line default-param-last
  method: string = 'GET',
  body?: any,
  ContentType:string = 'application/json',
) {
  let status: number
  let header:any
  const reposnse = await fetch(BASE_URL + endpoint, {
    method,
    // mode: 'no-cors',
    headers: {
       Accept: 'application/json',
      'Content-Type': ContentType,
    },
    credentials: 'include',
    body: ContentType === 'application/json' ? JSON.stringify(body) : body,
  })
    .then((response) => {
      status = response.status
      header = response.headers
      return response.json()
    })
    .then((responseJSON) => {
      if (status >= 200 && status < 300) return { responseJSON, status, header }
      responseJSON.errors.forEach((element:any) => {
        toast.error(element.message)
      })
      if (status === 401) {
      toast.error('Please log in')
      }

      return { responseJSON, status, header }
    })
    .catch((res) => {
      toast.error('Please log in')
      return { responseJSON: res, status, header }
    })
  return reposnse
}
export const uploadFile = async (body: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}file/upload`, { method: 'POST', body })
  const res = await response.json()
  return { res, status: response.status }
}
