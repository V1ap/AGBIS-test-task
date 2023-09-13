import styles from "./App.module.scss";
import ChangeLanguage from "./components/sections/ChangeLanguage/ChangeLanguage";
import Filter from "./components/sections/Filter/Filter";
import NewTodo from "./components/sections/NewTodo/NewTodo";
import TodoList from "./components/sections/TodoList/TodoList";

function App() {
  return (
    <main className={styles.main}>
      <NewTodo />
      <Filter />
      <ChangeLanguage />
      <TodoList />
    </main>
  );
}

export default App;
