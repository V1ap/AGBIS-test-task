import todoListStore from "../../../../store/todoListStore";
import Button from "../../../ui/Button/Button";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface IRenameTodoButton {
  id: string;
}

const RenameTodoButton: React.FC<IRenameTodoButton> = ({ id }) => {
  const { changeRename } = todoListStore;
  const { t } = useTranslation();

  return (
    <Button
      content={t("todoList.renameTodo")}
      onClick={() => changeRename(id, true)}
      className={styles.renameTodoBtn}
    />
  );
};

export default RenameTodoButton;
