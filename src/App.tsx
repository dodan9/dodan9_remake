import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { GlobalStyle } from "./styles/global_style";

function App() {
  return (
    <BrowserRouter basename='/dodan9_remake'>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
