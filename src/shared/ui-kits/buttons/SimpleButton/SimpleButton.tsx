import styles from "./styles.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

export const SimpleButton = ({
  onClick,
  text,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
