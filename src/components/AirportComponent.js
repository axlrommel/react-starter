import React, { useState } from "react";
import PropTypes from "prop-types";
import { length } from "ramda";
import DataComponent from "./DataComponent";

const AirportComponent = ({ label, getData, data }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name="code"
        id="inputCode"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button disabled={length(input) !== 4} onClick={() => getData(input)}>
        Go!
      </button>
      <DataComponent data={data} />
    </>
  );
};

AirportComponent.propTypes = {
  getData: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default AirportComponent;
