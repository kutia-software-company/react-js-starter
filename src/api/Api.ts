import Axios from 'axios';

export async function apiRequest<D = {}, R = unknown>(
  method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch',
  path: string,
  input?: D,
  options?: any
) {
  const res = await Axios.request<R>({
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    method: method,
    data: input,
    headers: options,
  });
  return res.data;
}

export * from './User';
