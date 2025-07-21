import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../../shared/store/store";
import { setTitle } from "../../../shared/store/slices/filter.slice";
import { SimpleInput } from "../../../shared/ui-kits/inputs";
import { SimpleButton } from "../../../shared/ui-kits/buttons";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../../shared/store/hooks";

export const HeaderSearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useAppSelector((state: RootState) => state.books);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!loading) {
      dispatch(setTitle(searchQuery.trim()));
    }
  };

  return (
    <nav className={styles.searchbar}>
      <SimpleInput
        value={searchQuery}
        onChange={setSearchQuery}
        onBlur={handleSearch}
        placeholder="Find books..."
        disabled={loading}
      />
      <SimpleButton
        text={loading ? "Searching..." : "Search"}
        onClick={handleSearch}
        disabled={loading}
      />
    </nav>
  );
};
