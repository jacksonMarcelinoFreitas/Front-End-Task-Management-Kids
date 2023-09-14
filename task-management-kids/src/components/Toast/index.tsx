import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastMessageProps {
  type?: 'success' | 'warn' | 'error' | 'info';
  message?: string;
}

export function ToastMessage({ type = 'info', message } : ToastMessageProps){
  if (!message) return null;

  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }

  return null;
};