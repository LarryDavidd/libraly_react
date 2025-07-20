import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../shared/store/store";
import { setTitle } from "../../../shared/store/slices/filter.slice";
import { SimpleInput } from "../../../shared/ui-kits/inputs";
import { SimpleButton } from "../../../shared/ui-kits/buttons";
import styles from "./styles.module.scss";

export const HeaderSearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (query: string) => {
    dispatch(setTitle(query));
  };

  return (
    <nav className={styles.serchbar}>
      <SimpleInput
        onBlur={handleSearch}
        onChange={() => {}}
        placeholder="Find books..."
      />
      <SimpleButton text="Search" onClick={() => {}} />
    </nav>
  );
};
