import { stationsUrl } from "../constants/appConstants";

const fetchJSON = async (url, opts) => {
  try {
    const response = await fetch(url, opts);
    if (!response.ok) {
      throw new Error(`fetch failed: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const fetchStationInfo = async id => {
  return id
    ? await fetchJSON(`${stationsUrl}/${id}`, {
        withCredentials: true
      })
    : "";
};