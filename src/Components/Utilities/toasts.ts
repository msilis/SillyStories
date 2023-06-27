import { toast } from "react-toastify";

const showToast = (toastText: string) => {
  toast.error(toastText, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export { showToast };
