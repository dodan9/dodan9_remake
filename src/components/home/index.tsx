import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BlackJack from "../blackjack";
import Pokemon from "../pokemon";
import Menu from "./menu";

const Home = () => {
  return (
    <Container>
      <FixHeader>
        <h1>Dodan9</h1>
      </FixHeader>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/blackjack' element={<BlackJack />} />
      </Routes>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 1020px;
  height: 100vh;
  margin: 0 auto;
`;

const FixHeader = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 0;
  }
`;
