import { useState } from "react"
import { IRegisterUser, registerUser } from "../services/registerUser"
import { toast } from "react-toastify"
import axios from "axios"

export const useRegisterUser = () => {
  const [loading, setLoading] = useState(false)

  const handle = async (props: IRegisterUser) => {
    try {
      setLoading(true)
      const {data: { message} } = await registerUser(props)
      toast.success(message)
      return true
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
      return false
    } finally  {
      setLoading(false)
    }
  }

  return {
    handle,
    loading
  }
}