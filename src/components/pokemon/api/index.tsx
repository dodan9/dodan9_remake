import axios from "axios";

const rootApi = "https://pokeapi.co/api/v2";

export const getPokeApi = (quary: string) => {
  return axios({
    url: `${rootApi}/${quary}`,
    method: "get",
  });
};
export const getSinnohApi = (quary?: string) => {
  return getPokeApi(`region/4/${quary ? quary : ""}`);
};

export const getLocationApi = (locationName: string) => {
  return getPokeApi(`location/${locationName}`);
};

export const getTypeApi = () => {
  return getPokeApi("type");
};
