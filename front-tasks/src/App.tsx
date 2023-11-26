import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./context/Context";
import MainRoutes from "./routes/main.routes";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <>
      <Context>
        <ToastContainer />
        <GlobalStyle />
        <MainRoutes />
      </Context>
    </>
  );
}

export default App;
