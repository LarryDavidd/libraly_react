import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Footer } from "../shared/components";
import { MainHeader } from "../widgets/MainHeader";

const App = () => {
  return (
    <>
      <MainHeader />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
