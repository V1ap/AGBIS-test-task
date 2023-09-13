import { TTodo } from "../types/Todo";
import { makeAutoObservable } from "mobx";

const storageList = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList") || "")
  : ""; // подгрузка с локал стораджа

class TodoListStore {
  todoList: TTodo[] =
    storageList?.length > 0
      ? storageList
      : [
          {
            name: "Создать новый проект React с использованием TypeScript.",
            isDone: true,
            isRename: false,
            id: "1",
          },
          {
            name: "Разработать компоненты",
            isDone: true,
            isRename: false,
            id: "10",
          },
          {
            name: "Использовать MobX для управления состоянием приложения.",
            isDone: true,
            isRename: false,
            id: "11",
          },
          {
            name: "Реализовать отображение списка задач с их текущим статусом (выполнена/невыполнена).",
            isDone: true,
            isRename: false,
            id: "12",
          },
          {
            name: "Реализовать возможность добавления новой задачи.",
            isDone: true,
            isRename: false,
            id: "13",
          },
          {
            name: "Реализовать возможность отметить задачу как выполненную.",
            isDone: true,
            isRename: false,
            id: "14",
          },
          {
            name: "Реализовать возможность удалить задачу.",
            isDone: true,
            isRename: false,
            id: "15",
          },
          {
            name: "Добавить возможность фильтрации задач по статусу.",
            isDone: true,
            isRename: false,
            id: "16",
          },
          {
            name: "Создать несколько примеров задач для инициализации списка.",
            isDone: true,
            isRename: false,
            id: "17",
          },
          {
            name: "Обеспечить стилизацию и визуальное оформление приложения.",
            isDone: true,
            isRename: false,
            id: "18",
          },
          {
            name: "Обеспечить возможность редактирования задач с помощью модального окна или инлайн-редактирования.",
            isDone: true,
            isRename: false,
            id: "19",
          },
          {
            name: "Обеспечить адаптивный дизайн приложения для поддержки различных устройств и экранов.",
            isDone: true,
            isRename: false,
            id: "20",
          },
          {
            name: "Обеспечить проверку ввода данных.",
            isDone: true,
            isRename: false,
            id: "21",
          },
          {
            name: "Обеспечтте возможность переключения языков интерфейса (русский/английский) с использованием локализации.",
            isDone: true,
            isRename: false,
            id: "22",
          },
          {
            name: "Обеспечьте использование Git для контроля версий и предоставьте ссылку на репозиторий с выполненным заданием.",
            isDone: true,
            isRename: false,
            id: "23",
          },
          {
            name: "Получить оффер",
            isDone: false,
            isRename: false,
            id: "24",
          },
        ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: TTodo) => {
    this.todoList = [...this.todoList, todo];
  };

  removeTodo = (id: string) => {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  };

  toggleIsDone = (id: string) => {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  };

  changeRename = (id: string, isRename: boolean, newValue?: string) => {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id
        ? { ...todo, isRename: isRename, name: newValue ? newValue : todo.name }
        : todo
    );
  };
}

export default new TodoListStore();
