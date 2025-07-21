import { useState } from "react";
import { SimpleButton } from "../../../shared/ui-kits/buttons";
import { ParseModal } from "../../ParseSection";
import styles from "./styles.module.scss";
import { FilterBar } from "../../filterBar";

export const HeaderButtons = () => {
  const [isParseModalOpen, setIsParseModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleParseModalClose = () => {
    setIsParseModalOpen(false);
  };

  const handleFilterState = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className={styles.header__buttons}>
      <div className={styles.header__buttons}>
        <SimpleButton onClick={() => handleFilterState()} text="Spoiler" />
      </div>
      <div className={styles.header__buttons}>
        <SimpleButton onClick={() => setIsParseModalOpen(true)} text="Parse" />
      </div>

      <ParseModal isOpen={isParseModalOpen} onClose={handleParseModalClose} />
      <FilterBar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
};
