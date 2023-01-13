import { createContext, useCallback, useState } from "react";
import { IToastConfig } from "../../../models/interfaces/other/toast-config";
import ToastContainer from "../ToastContainer";

export const ToastContext = createContext<{
  addToast: (toast: IToastConfig) => void;
  removeToast: (id: any) => void;
}>({ addToast: () => {}, removeToast: () => {} });

let id = 1;

export const ToastProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<IToastConfig[]>([]);

  const addToast = useCallback(
    (toast: IToastConfig) => {
      setToasts((toasts) => [
        ...toasts,
        {
          id: id++,
          content: toast.content,
          type: toast.type,
          icon: toast.icon,
        }
      ]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: any) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
