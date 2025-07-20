import { useState } from "react";
import { SimpleButton } from "../../../shared/ui-kits/buttons";
import { ParseModal } from "../../ParseSection";
import styles from "./styles.module.scss";

export const HeaderButtons = () => {
  const [isParseModalOpen, setIsParseModalOpen] = useState(false);

  const handleParseModalClose = () => {
    setIsParseModalOpen(false);
  };

  return (
    <div className={styles.header__buttons}>
      <div className={styles.header__buttons}>
        <SimpleButton onClick={() => {}} text="Spoiler" />
      </div>
      <div className={styles.header__buttons}>
        <SimpleButton onClick={() => setIsParseModalOpen(true)} text="Parse" />
      </div>

      <ParseModal isOpen={isParseModalOpen} onClose={handleParseModalClose} />
    </div>
  );
};
