import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import todoListStore from "../../../../store/todoListStore";
import Button from "../../../ui/Button/Button";
import Input from "../../../ui/Input/Input";
import styles from "./styles.module.scss";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
interface IFormChangeName {
  id: string;
  name: string;
}

const FormChangeName: React.FC<IFormChangeName> = ({ id, name }) => {
  const [inputValue, setInputValue] = useState<string>(name);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { changeRename } = todoListStore;
  const { t } = useTranslation();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  useOnClickOutside(formRef, () => handlerChangeChangeState());

  const handlerChangeChangeState = () => {
    if (inputValue) {
      changeRename(id, false, inputValue);
    } else {
      changeRename(id, false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={() => changeRename(id, false, inputValue)}
      action=""
      className={styles.todoItem__form}
    >
      <Input
        placeholder={t("todoList.placeholderRenameTodo")}
        className={styles.todoItem__input}
        value={inputValue}
        onChange={(e) => handlerChange(e)}
        autoFocus={true}
      />

      <Button
        content={t("todoList.acceptRenameTodo")}
        onClick={handlerChangeChangeState}
        className={styles.todoItem__submitBtn}
        type="submit"
      />

      <Button
        content={t("todoList.cancelRenameTodo")}
        onClick={() => changeRename(id, false)}
        className={styles.todoItem__cancelBtn}
        type="reset"
      />
    </form>
  );
};

export default FormChangeName;
