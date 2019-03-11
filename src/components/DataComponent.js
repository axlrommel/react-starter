import React from "react";
import PropTypes from "prop-types";
import { keys, length } from "ramda";

const DataComponent = ({ data }) => {
  if (length(data) === 0) return null;
  const dataItems = data.map((report, index) => (
    <li key={index}>
      {keys(report).map((key, idx) => (
        <div key={idx}>
          {key}: {report[key]}
        </div>
      ))}
    </li>
  ));
  return <ul>{dataItems}</ul>;
};

DataComponent.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataComponent;
