import { BookList } from "../../../entities/Books";
import { FilterBar } from "../../../widgets/filterBar";
import { MainHeader } from "../../../widgets/MainHeader";
import { ParseSection } from "../../../widgets/ParseSection";

export const MainPage = () => {
  return (
    <>
      <MainHeader />
      <section className="wrapper">
        <ParseSection />
      </section>
      <section className="wrapper">
        <FilterBar />
        <BookList />
      </section>
    </>
  );
};
