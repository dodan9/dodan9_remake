import { Link } from "react-router-dom";
import styled from "styled-components";

const PokeNavi = () => {
  return (
    <>
      <Navigation>
        <Link to='/pokemon'>
          <div>Sinnoh Locations</div>
        </Link>
        <Link to='/pokemon/mypokemonbox'>
          <div>My Pokemons</div>
        </Link>
      </Navigation>
    </>
  );
};

export default PokeNavi;

const Navigation = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: right;
  align-items: center;
  div:nth-child(1) {
    margin-right: 30px;
  }
`;
