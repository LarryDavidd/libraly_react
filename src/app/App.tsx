import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Footer } from "../shared/components";

const App = () => {
  return (
    <>
      <RouterProvider router={router} /> <Footer />
    </>
  );
};

export default App;
