import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

interface IInputProps {
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value: string;
  autoFocus?: boolean;
}

const Input: React.FC<IInputProps> = ({
  placeholder = "Название",
  className,
  onChange,
  value,
  autoFocus,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  });

  return (
    <input
      ref={inputRef}
      type="text"
      className={`${styles.input} ${!!className ? className : ""}`}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};

export default Input;
