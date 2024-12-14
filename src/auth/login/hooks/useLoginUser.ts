import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { ILoginUser, loginUser } from "../services/loginUser"

export const useLoginUser = () => {
  const [loading, setLoading] = useState(false)

  const handle = async (props: ILoginUser) => {
    try {
      setLoading(true)
      const {data: {message}} = await loginUser(props)
      toast.success(message)
      return true
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    handle
  }
}