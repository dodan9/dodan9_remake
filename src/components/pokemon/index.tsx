import { Route, Routes } from "react-router-dom";
import Areas from "components/pokemon/components/Areas";
import Locations from "components/pokemon/components/Locations";
import MyPokemonBox from "components/pokemon/components/MyPokemonBox";
import PokeNavi from "components/pokemon/components/PokeNavi";

const Pokemon = () => {
  return (
    <>
      <PokeNavi />
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="/:location" element={<Areas />} />
        <Route path="/mypokemonbox" element={<MyPokemonBox />} />
      </Routes>
    </>
  );
};

export default Pokemon;
