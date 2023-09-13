import styles from "./styles.module.scss";

interface IButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  content: React.ReactNode | string;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  content,
  type = "button",
}) => {
  return (
    <button
      className={`${styles.button} ${!!className ? className : ""}`}
      onClick={(e) => onClick(e)}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
