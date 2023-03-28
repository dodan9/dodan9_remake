import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { GlobalStyle } from "./Styles/global_style";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
