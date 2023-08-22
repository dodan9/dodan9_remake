import Menu from "components/home/menu";
import Nav from "components/nav";
import { Route, Routes } from "react-router-dom";

export const mainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/*" element={<Nav />} />
    </Routes>
  );
};
