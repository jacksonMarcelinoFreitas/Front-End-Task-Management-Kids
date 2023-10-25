import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IToastMessage } from './type';

export function ToastMessage({ type = 'info', message }: IToastMessage){
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