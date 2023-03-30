import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getLocationApi } from "../api";
import EncounterModal from "./EncounterModal";

interface AreasType {
  areas: [{ name: string; url: string }];
}
const Areas = () => {
  const { location } = useParams<string>();
  const [areas, setAreas] = useState<AreasType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const callApi = async () => {
    try {
      const response = await getLocationApi(location as string);
      setAreas(response.data);
      setLoading(false);
    } catch (e) {
      alert("Sorry, can't load...");
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <h2>{location}</h2>
      {areas && areas.areas.length > 0 ? (
        <ul>
          {areas.areas.map((area) => (
            <div key={area.name}>
              <Area onClick={() => setIsModalOpen(true)}>{area.name}</Area>
              {isModalOpen && (
                <EncounterModal
                  url={area.url}
                  closeFunction={() => setIsModalOpen(false)}
                />
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div>no pokemons...</div>
      )}
    </>
  );
};

export default Areas;

const Area = styled.li`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
