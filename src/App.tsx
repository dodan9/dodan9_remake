import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/home/index";
import { GlobalStyle } from "styles/global";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
