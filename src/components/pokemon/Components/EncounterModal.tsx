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

const EncounterModal = ({ url, closeFunction }: EncounterModalPropsType) => {
  const [areaInfo, setAreaInfo] = useState<AreaInfoType>();
  const [loading, setLoading] = useState<boolean>(true);

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
            <CommandBox>
              {areaInfo.encounter_method_rates
                .filter(
                  (method) => !method.encounter_method.name.includes("rod")
                )
                .map((method, index) => {
                  return (
                    <CommandBtn key={index}>
                      {method.encounter_method.name}
                    </CommandBtn>
                  );
                })}
              <CommandBtn onClick={closeFunction}>close</CommandBtn>
            </CommandBox>
          </>
        )}
      </EncounterBox>
    </Modal>
  );
};

export default EncounterModal;

const Box = styled.div`
  border: 5px double black;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 20px;
`;

const EncounterBox = styled(Box)`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AreaName = styled(Box)`
  font-size: large;
`;

const CommandBox = styled(Box)`
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
