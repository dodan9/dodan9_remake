import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BlackJack from "../Blackjack";
import Pokemon from "../Pokemon";
import Map from "../Map";

const Navigator = () => {
  return (
    <>
      <SideMenu>navigator</SideMenu>
      <Routes>
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/blackjack' element={<BlackJack />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </>
  );
};

export default Navigator;

const SideMenu = styled.div`
  position: absolute;
  top: 100px;
  left: -200px;
`;
