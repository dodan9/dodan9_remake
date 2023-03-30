import { Route, Routes, useParams } from "react-router-dom";
import Areas from "./Components/Areas";
import Locations from "./Components/Locations";
import MyPokemonBox from "./Components/MyPokemonBox";
import PokeNavi from "./Components/PokeNavi";

const Pokemon = () => {
  return (
    <>
      <PokeNavi />
      <Routes>
        <Route path='/' element={<Locations />} />
        <Route path='/:location' element={<Areas />} />
        <Route path='/mypokemonbox' element={<MyPokemonBox />} />
      </Routes>
    </>
  );
};

export default Pokemon;
