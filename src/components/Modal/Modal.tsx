import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./styles.module.scss";

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<IModal> = ({ children, isOpen }) => {
  const node = document.querySelector("#root");

  useEffect(() => {
    const body: HTMLBodyElement | null = document.querySelector("body"); // для скрытия скролла страницы
    if (isOpen && body) {
      body.style.overflow = "hidden";
    } else {
      if (body) {
        body.style.overflow = "auto";
      }
    }

    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const modalContainer = (
    <div
      className={styles.overlay}
      style={isOpen ? { opacity: 1, zIndex: 999 } : { opacity: 0, zIndex: -1 }} // для всплытия модального окна
    >
      {children}
    </div>
  );

  return node ? createPortal(modalContainer, node) : null; // для перемещения модального окна в root
};

export default Modal;
