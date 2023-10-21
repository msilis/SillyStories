import { toast } from 'react-toastify'

const showErrorToast = (toastText: string) => {
    toast.error(toastText, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })
}

const showSuccessToast = (toastText: string) => {
    toast.success(toastText, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })
}

export { showErrorToast, showSuccessToast }
