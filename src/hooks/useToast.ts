import { useContext } from "react";
import { ToastContext } from "../components/Toast/ToastProvide";

export function useToast() {
  const toastHelpers = useContext(ToastContext);
  return toastHelpers;
}