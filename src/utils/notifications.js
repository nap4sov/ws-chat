import { toast } from 'react-toastify';

const toastConfig = {
  position: 'top-center',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'dark',
};

export const notifyWarning = message =>
  toast.warning(message, { ...toastConfig, toastId: message });

export const notifyError = message =>
  toast.error(message, { ...toastConfig, toastId: message });
