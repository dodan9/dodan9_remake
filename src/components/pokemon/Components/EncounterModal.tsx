import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../../../Styles/global_style";

interface EncounterModalPropsType {
  url: string;
  closeFunction: () => void;
}

interface AreaInfoType {
  encounter_method_rates: [
    {
      encounter_method: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rate: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  name: string;
  pokemon_encounters: [
    {
      pokemon: {
        name: string;
        url: string;
      };
      version_details: [
        {
          encounter_details: [
            {
              chance: string;
              max_level: number;
              method: {
                name: string;
                url: string;
              };
              min_level: number;
            }
          ];
          max_chance: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
}

interface PokemonInfoType {
  name: string;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    home: {
      front_default: string;
      front_shiny: string;
    };
    versions: {
      "eneration-iv": {
        platinum: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
    };
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}

const EncounterModal = ({ url, closeFunction }: EncounterModalPropsType) => {
  const [areaInfo, setAreaInfo] = useState<AreaInfoType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoType | null>(null);
  const [pokemonLoading, setPokemonLoading] = useState<boolean>(true);

  const callApi = async () => {
    try {
      const response = await axios({
        url: url,
        method: "get",
      });
      setAreaInfo(response.data);
      setLoading(false);
    } catch (e) {
      alert("sorry...");
    }
  };

  const callPokemonApi = async (pokemonUrl: string) => {
    try {
      const response = await axios({
        url: pokemonUrl,
        method: "get",
      });
      setPokemonInfo(response.data);
    } catch (e) {
      alert(e);
    }
  };

  const getRandomNumber = (max: number, min: number) => {
    if (max === min) return max;
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
  };

  const encounterPokemon = (method_name: string) => {
    setPokemonInfo(null);
    setPokemonLoading(true);
    if (areaInfo) {
      const encounter_pokemons = areaInfo.pokemon_encounters.filter(
        (details) => {
          if (
            details.version_details.filter(
              (version) =>
                version.version.name.includes("platinum") &&
                version.encounter_details.filter((encounter) =>
                  encounter.method.name.includes(method_name)
                ).length > 0
            ).length > 0
          )
            return true;
          else return false;
        }
      );
      const randomNumber = getRandomNumber(encounter_pokemons.length, 0);

      callPokemonApi(encounter_pokemons[randomNumber].pokemon.url);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Modal>
      <EncounterBox>
        {loading && <h2>Loading...</h2>}
        {areaInfo && (
          <>
            <AreaName>{areaInfo.name}</AreaName>
            {pokemonInfo ? (
              <PokemonBox>
                <PokemonName>{pokemonInfo.name}</PokemonName>
                <div>
                  <PokemonImg
                    src={
                      pokemonLoading
                        ? require("../Images/monsterball.png")
                        : pokemonInfo.sprites.front_default
                    }
                    onLoad={() => setPokemonLoading(false)}
                  />
                </div>
              </PokemonBox>
            ) : (
              <h2>Let's go!</h2>
            )}
            <CommandBox>
              {pokemonInfo ? (
                <>
                  <CommandBtn>catch</CommandBtn>
                  <CommandBtn onClick={() => setPokemonInfo(null)}>
                    run
                  </CommandBtn>
                </>
              ) : (
                areaInfo.encounter_method_rates
                  .filter(
                    (method) => !method.encounter_method.name.includes("rod")
                  )
                  .map((method, index) => {
                    return (
                      <CommandBtn
                        key={index}
                        onClick={() =>
                          encounterPokemon(method.encounter_method.name)
                        }
                      >
                        {method.encounter_method.name}
                      </CommandBtn>
                    );
                  })
              )}
              <CommandBtn onClick={closeFunction}>close</CommandBtn>
            </CommandBox>
          </>
        )}
      </EncounterBox>
    </Modal>
  );
};

export default EncounterModal;

export const DoubleBorderBox = styled.div`
  border: 5px double black;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 20px;
`;

const EncounterBox = styled(DoubleBorderBox)`
  min-width: 400px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AreaName = styled(DoubleBorderBox)`
  font-size: large;
  & ~ h2 {
    text-align: center;
  }
`;

const PokemonBox = styled.div`
  display: flex;
  margin: 30px 0;
  max-width: 400px;
  div:last-child {
    width: 180px;
    height: 180px;
  }
`;

const PokemonImg = styled.img`
  display: "block";
  width: 100%;
`;

const PokemonName = styled.div`
  border: 5px double black;
  border-top: 0;
  border-right: 0;
  border-radius: 5px;
  padding: 3px 10px;
  height: fit-content;
  flex: 1;
`;

const CommandBox = styled(DoubleBorderBox)`
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CommandBtn = styled.div`
  &:hover {
    margin-left: -0.5em;
    cursor: pointer;
    &::before {
      content: "";
      height: 0;
      width: 0;
      border-color: transparent black;
      border-style: solid;
      border-width: 0.3em 0 0.3em 0.5em;
      position: relative;
      display: inline-block;
      left: -0.5em;
      top: 0.1em;
    }
  }
`;
