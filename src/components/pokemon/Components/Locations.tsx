import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getSinnohApi } from "../api";

interface sinnohTypes {
  id: number;
  locations: [{ name: string; url: string }];
  name: string;
  names: [{ language: string; name: string }];
}

const Locations = () => {
  const [sinnoh, setSinnoh] = useState<sinnohTypes>();
  const [loading, setLoading] = useState<boolean>(true);

  const callApi = async () => {
    try {
      const response = await getSinnohApi();
      setSinnoh(response.data);
      setLoading(false);
    } catch (e) {
      alert("sorry, can't load");
    }
  };
  const getLocationSymbol = (name: string) => {
    let symbol: string = "monsterball";
    if (name.includes("city")) symbol = "note";
    if (name.includes("route")) symbol = "grass";
    if (name.includes("path") || name.includes("road")) symbol = "path";
    if (
      name.includes("cave") ||
      name.includes("tunnel") ||
      name.includes("gate") ||
      name.includes("island")
    )
      symbol = "cave";
    if (name.includes("forest") || name.includes("mountain")) symbol = "forest";
    if (name.includes("garden") || name.includes("flower")) symbol = "garden";
    if (name.includes("battle")) symbol = "battle";
    if (name.includes("museum")) symbol = "museum";
    if (name.includes("lake")) symbol = "fishing_rod";
    if (
      name.includes("store") ||
      name.includes("restaurant") ||
      name.includes("cafe") ||
      name.includes("game")
    )
      symbol = "coin";

    return require(`../images/${symbol}.png`);
  };

  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <SinnohTitle>This Is Sinnoh</SinnohTitle>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <SinnohContainer>
          {sinnoh &&
            sinnoh.locations.map((location) => {
              return (
                <Link to={`${location.name}`} key={location.name}>
                  <Location>
                    <img
                      src={getLocationSymbol(location.name)}
                      alt="symbol img"
                    ></img>
                    {location.name}
                  </Location>
                </Link>
              );
            })}
        </SinnohContainer>
      )}
    </>
  );
};

export default Locations;

const sinnoh_background = require("../images/sinnoh_background.png");

const SinnohTitle = styled.h1`
  margin: 0;
`;
const Loading = styled.h2``;
const SinnohContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 0 40px;
  /* background-image: url(${sinnoh_background});
  background-size: cover; */
  margin-bottom: 40px;
`;
const Location = styled.li`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  img {
    display: block;
    width: 50px;
  }
`;
