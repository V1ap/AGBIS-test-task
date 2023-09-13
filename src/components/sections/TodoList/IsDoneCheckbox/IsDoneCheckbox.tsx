import IsDoneIcon from "../../../../assets/IsDoneIcon";
import todoListStore from "../../../../store/todoListStore";
import styles from "./styles.module.scss";

interface IIsDoneCheckbox {
  IsDone: boolean;
  id: string;
}

const IsDoneCheckbox: React.FC<IIsDoneCheckbox> = ({ IsDone, id }) => {
  const { toggleIsDone } = todoListStore;

  return (
    <button className={styles.isDoneCheckbox} onClick={() => toggleIsDone(id)}>
      <span
        className={styles.isDoneCheckbox__icon}
        style={IsDone ? { transform: "scale(1) rotate(1turn)" } : {}}
      >
        <IsDoneIcon color="#42f554" />
      </span>
    </button>
  );
};

export default IsDoneCheckbox;
