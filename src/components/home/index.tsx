import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Menu from "./menu";
import Side from "../Navigator/navigator";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <Container>
      <FixHeader>
        <Link to='/'>
          <h1>Dodan9</h1>
        </Link>
      </FixHeader>

      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/*' element={<Side />} />
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
