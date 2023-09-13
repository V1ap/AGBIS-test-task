import FormChangeName from "../FormChangeName/FormChangeName";
import IsDoneCheckbox from "../IsDoneCheckbox/IsDoneCheckbox";
import RemoveTodoButton from "../RemoveTodoButton/RemoveTodoButton";
import RenameTodoButton from "../RenameTodoButton/RenameTodoButton";
import styles from "./styles.module.scss";

interface ITodoItem {
  name: string;
  id: string;
  isDone: boolean;
  isRename: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({ name, id, isDone, isRename }) => {
  return (
    <li className={`${styles.todoItem} ${isRename ? styles.isRename : ""}`}>
      <IsDoneCheckbox IsDone={isDone} id={id} />
      {isRename ? (
        <FormChangeName id={id} name={name} />
      ) : (
        <>
          <h2 className={styles.todoItem__name}>{name}</h2>
          <RenameTodoButton id={id} />
          <RemoveTodoButton id={id} />
        </>
      )}
    </li>
  );
};

export default TodoItem;
