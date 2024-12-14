import { clientAxios } from "../../../config/api"

interface ILoginUserPayload {
  email: string,
  password: string
}

export interface ILoginUser {
  payload: ILoginUserPayload
}

export const loginUser = ({payload}: ILoginUser) => {
  return clientAxios.post<{message: string}>('/auth/login', payload);
}