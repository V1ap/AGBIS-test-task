import todoList from "../../../store/todoListStore";
import { generateRandomString } from "../../../utils/generateRandomString";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NewTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handlerSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (inputValue !== "") {
      setError("");
      todoList.addTodo({
        id: generateRandomString(),
        isDone: false,
        name: inputValue,
        isRename: false,
      });
      setInputValue("");
    } else {
      setError(t("newTodo.errorNoName"));
    }
  };

  return (
    <section className={styles.newTodo}>
      <form className={styles.newTodo__form} onSubmit={(e) => handlerSubmit(e)}>
        {!!error ? (
          <span className={styles.newTodo__error}>{error}</span>
        ) : null}
        <Input
          placeholder={t("newTodo.placeholder")}
          value={inputValue}
          onChange={handlerChangeInput}
          className={styles.newTodo__input}
        />
        <Button
          onClick={(e) => handlerSubmit(e)}
          content={t("newTodo.buttonName")}
          className={styles.newTodo__btn}
          type="submit"
        />
      </form>
    </section>
  );
};

export default NewTodo;
