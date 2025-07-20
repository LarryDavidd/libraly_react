import styles from "./styles.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
  disable?: boolean;
}

export const SimpleButton = ({
  onClick,
  text,
  disable = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disable}
      className={styles.button}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
