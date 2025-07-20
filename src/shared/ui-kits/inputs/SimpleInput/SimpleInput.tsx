import React from "react";
import styles from "./styles.module.scss";

interface SearchInputProps {
  onChange: (query: string) => void;
  onBlur?: (query: string) => void;
  placeholder?: string;
  className?: string;
  value?: string;
  type?: string;
}

export const SimpleInput: React.FC<SearchInputProps> = ({
  onChange = () => {},
  onBlur = () => {},
  placeholder = "Поиск...",
  type = "text",
}) => {
  return (
    <input
      type={type}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};
