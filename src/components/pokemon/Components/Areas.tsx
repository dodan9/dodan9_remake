import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getLocationApi } from "../api";
import EncounterModal, { DoubleBorderBox } from "./EncounterModal";

interface AreasType {
  areas: [{ name: string; url: string }];
}
const Areas = () => {
  const { location } = useParams<string>();
  const [areas, setAreas] = useState<AreasType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [modalUrl, setModalUrl] = useState<string>("");

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
              <AreaBox>
                <Area onClick={() => setModalUrl(area.url)}>{area.name}</Area>
              </AreaBox>
            </div>
          ))}
        </ul>
      ) : (
        <div>no pokemons...</div>
      )}
      {modalUrl !== "" && (
        <EncounterModal url={modalUrl} closeFunction={() => setModalUrl("")} />
      )}
    </>
  );
};

export default Areas;

const AreaBox = styled(DoubleBorderBox)`
  width: fit-content;
`;
const Area = styled.li`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
