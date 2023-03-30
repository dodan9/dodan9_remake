import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BlackJack from "../Blackjack";
import Pokemon from "../Pokemon";
import Map from "../Map";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <SideMenu>
        {isMenuOpen && (
          <ul>
            <li>
              <Link to='/blackjack'>Black Jack</Link>
            </li>
            <li>
              <Link to='/pokemon'>Pokemon</Link>
            </li>
          </ul>
        )}
        <MenuButton onClick={() => setIsMenuOpen((current) => !current)}>
          {isMenuOpen ? "X" : "menu >"}
        </MenuButton>
      </SideMenu>
      <Routes>
        <Route path='/pokemon/*' element={<Pokemon />} />
        <Route path='/blackjack' element={<BlackJack />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </>
  );
};

export default Navigator;

const SideMenu = styled.div`
  position: fixed;
  z-index: 999;
  top: 130px;
  left: 20px;
  display: flex;
  align-items: flex-start;
  ul {
    margin-right: 10px;
  }
  li {
    margin: 5px 0;
    text-align: right;
  }
  li:hover {
    text-decoration: underline;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  margin-top: 5px;
`;
