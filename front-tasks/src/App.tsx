import Context from "./context/Context";
import MainRoutes from "./routes/main.routes";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <>
      <Context>
        <GlobalStyle />
        <MainRoutes />
      </Context>
    </>
  );
}

export default App;
