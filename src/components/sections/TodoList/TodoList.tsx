import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import TodoListStore from "../../../store/todoListStore";
import TodoItem from "./TodoItem/TodoItem";
import filterStore from "../../../store/filterStore";
import { useBeforeunload } from "react-beforeunload";

const TodoList: React.FC = observer(() => {
  const { todoList } = TodoListStore;
  const { filter } = filterStore;
  useBeforeunload(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  });

  return (
    <section className={styles.todoList}>
      {todoList // фильтрация и отрисовка списка
        ? filter.current === "filter.filterItem-All"
          ? todoList.map((todo) => (
              <TodoItem
                name={todo.name}
                id={todo.id}
                isDone={todo.isDone}
                key={todo.id}
                isRename={todo.isRename}
              />
            ))
          : filter.current === "filter.filterItem-Completed"
          ? todoList.map((todo) => {
              if (todo.isDone) {
                return (
                  <TodoItem
                    name={todo.name}
                    id={todo.id}
                    isDone={todo.isDone}
                    key={todo.id}
                    isRename={todo.isRename}
                  />
                );
              }
            })
          : todoList.map((todo) => {
              if (!todo.isDone) {
                return (
                  <TodoItem
                    name={todo.name}
                    id={todo.id}
                    isDone={todo.isDone}
                    key={todo.id}
                    isRename={todo.isRename}
                  />
                );
              }
            })
        : null}
    </section>
  );
});

export default TodoList;
