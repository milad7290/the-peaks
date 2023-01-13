import React, { FC, ReactNode, useEffect } from "react";
import { useToast } from "../../../hooks/useToast";
import { ToastType } from "../../../models/enums/story/toast-type.enum";

import "./index.scss";

interface ToastProps {
  children?: ReactNode;
  id: string;
  type: ToastType;
}

const Toast: FC<ToastProps> = ({ children, id, type, ...rest }) => {
  const { removeToast } = useToast();

  let toastTypeClass = "";
  switch (type) {
    case ToastType.Success:
      toastTypeClass = "success-class";
      break;

    case ToastType.Error:
      toastTypeClass = "error-class";
      break;

    default:
      break;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000); // delay

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return <div className={`toast-wrapper ${toastTypeClass}`}>{children}</div>;
};

export default Toast;
