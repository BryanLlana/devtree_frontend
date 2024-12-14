import { clientAxios } from "../../../config/api"

interface IRegisterUserPayload {
  name: string,
  email: string,
  password: string
  passwordConfirmation: string
}

export interface IRegisterUser {
  payload: IRegisterUserPayload
}

export const registerUser = ({payload}: IRegisterUser) => {
  return clientAxios.post<{message: string}>('/auth/register', payload)
}