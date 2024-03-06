import { useState } from "react"

const useDialog = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const toggleDialog = () => {
        setOpenDialog(!openDialog)
    }

    return {
        openDialog,
        toggleDialog
    }
}

export default useDialog