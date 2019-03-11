import { GET_STATION_INFO } from "../constants/actionTypes.js";
import { pipe, assoc, append, path, isNil } from "ramda";

export const defaultState = [];

const reports = (state = defaultState, action) => {
  switch (action.type) {
    case GET_STATION_INFO: {
      const info = path(["selected", "properties"], action);
      return isNil(info)
        ? state
        : append(
            pipe(
              assoc("stationIdentifier", info.stationIdentifier),
              assoc("name", info.name),
              assoc("timeZone", info.timeZone),
              assoc("forecast", info.forecast)
            )({}),
            state
          );
    }
    default:
      return state;
  }
};

export default reports;
