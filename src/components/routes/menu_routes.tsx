import BlackJack from "components/blackjack";
import Pokemon from "components/pokemon";
import Map from "components/map";
import { Route, Routes } from "react-router-dom";
import Minesweeper from "components/minesweeper";

export const menuRoute = () => {
  return (
    <Routes>
      <Route path="/pokemon/*" element={<Pokemon />} />
      <Route path="/blackjack" element={<BlackJack />} />
      <Route path="/map" element={<Map />} />
      <Route path="/minesweeper" element={<Minesweeper />} />
    </Routes>
  );
};
