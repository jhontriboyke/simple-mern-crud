import { useState } from "react"
import useAuthContext from "./useAuthContext"

const useLogin = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        setSuccess(null)

        const response = await fetch("http://localhost:4400/api/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json))
            setError(null)
            setIsLoading(false)
            setSuccess(true)
            setTimeout(() => {
                dispatch({ type: "LOGIN", payload: json })
            }, 2000);
        }
    }

    return { login, isLoading, error, success }
}

export default useLogin