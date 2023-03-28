import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <ul>
        <Link to='/blackjack'>
          <MenuContent bg_color='black'>BlackJack</MenuContent>
        </Link>

        <Link to='/pokemon'>
          <MenuContent bg_color='orange'>Pokemon</MenuContent>
        </Link>
        <Link to='/map'>
          <MenuContent bg_color='blue'>Map</MenuContent>
        </Link>
        <MenuContent bg_color='yellow'>Menu4</MenuContent>
        <MenuContent bg_color='red'>Menu5</MenuContent>
        <MenuContent bg_color='green'>Menu6</MenuContent>
      </ul>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  ul {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 700px;
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }
`;

const MenuContent = styled.li<{ bg_color: string }>`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 10px;

  background-color: grey;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  &&:hover {
    //전역 스타일 무시
    transition: 0.3s;
    background-color: ${(props) => props.bg_color};
  }
`;
