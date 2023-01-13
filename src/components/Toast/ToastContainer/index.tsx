import React, { FC } from "react";
import { createPortal } from "react-dom";
import { IToastConfig } from "../../../models/interfaces/other/toast-config";
import Toast from "../Toast";

import "./index.scss";

interface ToastContainerProps {
  toasts: IToastConfig[];
}

const ToastContainer: FC<ToastContainerProps> = ({ toasts }) => {

  return createPortal(
    <div className="toast-container-wrapper">
      {toasts.map((item: any) => (
        <Toast key={item.id} id={item.id} type={item.type}>
          <p>
            <span>
              {" "}
              <img alt="bookmark" className="toast-icon" src={item.icon} />
            </span>{" "}
            {item.content}
          </p>
        </Toast>
      ))}
    </div>,
    document.body
  );
};

export default ToastContainer;
