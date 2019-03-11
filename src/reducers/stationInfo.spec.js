import stationInfo, { defaultState } from "./stationInfo";
import { GET_STATION_INFO } from "../constants/actionTypes";

const fetchResult = {
  properties: {
    stationIdentifier: "stationIdentifier",
    name: "name",
    timeZone: "timeZone",
    forecast: "forecast"
  }
};

const stateWithOneReport = [
  {
    properties: {
      stationIdentifier: "stationIdentifier1",
      name: "name1",
      timeZone: "timeZone1",
      forecast: "forecast1"
    }
  }
];

describe("todo actions", () => {
  it("should handle initial state", () => {
    expect(stationInfo(undefined, {})).toEqual(defaultState);
  });
  it("should handle GET_STATION_INFO when result is not correct", () => {
    const newState = stationInfo(defaultState, {
      type: GET_STATION_INFO,
      selected: { foo: "bar" }
    });
    expect(newState).toEqual(defaultState);
  });
  it("should handle GET_STATION_INFO for first report", () => {
    const newState = stationInfo(defaultState, {
      type: GET_STATION_INFO,
      selected: fetchResult
    });
    expect(newState.length).toEqual(1);
  });
  it("should handle GET_STATION_INFO for second report", () => {
    const newState = stationInfo(stateWithOneReport, {
      type: GET_STATION_INFO,
      selected: fetchResult
    });
    expect(newState.length).toEqual(2);
  });
});
