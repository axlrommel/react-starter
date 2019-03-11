import { connect } from "react-redux";
import { LoadStationInfo } from "../actions/stationInfo";
import { labelStation } from "../constants/appConstants.js";
import AirportComponent from "../components/AirportComponent";

const mapStateToProps = state => ({
  label: labelStation,
  data: state.stationInfo
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadStationInfo(id))
});

export const StationInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AirportComponent);
