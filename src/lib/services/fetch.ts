import axios from 'axios'

export const getDataWithAxios = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}
