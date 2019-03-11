import { fetchStationInfo } from "../api/fetch.js";
import { GET_STATION_INFO } from "../constants/actionTypes";
import { pipeP } from "ramda";

const getStationInfo = selected => ({
  type: GET_STATION_INFO,
  selected
});

export const LoadStationInfo = selected => dispatch =>
  pipeP(
    fetchStationInfo,
    getStationInfo,
    dispatch
  )(selected);
