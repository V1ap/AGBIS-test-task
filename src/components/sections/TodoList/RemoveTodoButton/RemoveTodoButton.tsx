import { useState, useRef } from "react";
import todoListStore from "../../../../store/todoListStore";
import Button from "../../../ui/Button/Button";
import styles from "./styles.module.scss";
import Modal from "../../../Modal/Modal";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { useTranslation } from "react-i18next";

interface IRemoveTodoButton {
  id: string;
}

const RemoveTodoButton: React.FC<IRemoveTodoButton> = ({ id }) => {
  const { removeTodo } = todoListStore;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useOnClickOutside(modalRef, handleCloseModal);

  return (
    <>
      <Button
        className={styles.removeTodoBtn}
        content={t("todoList.deleteTodo")}
        onClick={handleOpenModal}
      />
      <Modal isOpen={isOpenModal}>
        <div ref={modalRef} className={styles.modal}>
          <p className={styles.modal__text}>{t("todoList.modalText")}</p>
          <Button
            className={styles.modal__removeTodoBtn}
            content={t("Yes")}
            onClick={() => {
              handleCloseModal();
              removeTodo(id);
            }}
          />
          <Button
            className={styles.modal__cancelBtn}
            content={t("No")}
            onClick={handleCloseModal}
          />
        </div>
      </Modal>
    </>
  );
};

export default RemoveTodoButton;
