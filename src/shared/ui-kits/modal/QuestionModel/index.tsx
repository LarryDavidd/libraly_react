import { type ReactNode, useEffect } from "react";
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  children: ReactNode;
}

export const QuestionModel = ({
  isOpen,
  onClose,
  isLoading,
  children,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={!isLoading ? onClose : undefined}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {!isLoading && (
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        )}
        {children}
        {isLoading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner}></div>
            <p>Загрузка...</p>
          </div>
        )}
      </div>
    </div>
  );
};
