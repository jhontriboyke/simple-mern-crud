import { useContext } from "react"
import useAuthContext from "./useAuthContext"
import { BookContext } from "../context/bookContext"

const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: bookDispatch } = useContext(BookContext)

    const logout = () => {


        // clear localStorage
        localStorage.removeItem("user")

        dispatch({ type: "LOGOUT" })

        // clear global books state
        bookDispatch({ type: "CLEAR_STATE" })
    }

    return { logout }
}

export default useLogout