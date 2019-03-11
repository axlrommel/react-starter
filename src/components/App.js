import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { StationInfoContainer } from "../containers/StationInfoContainer";
import "react-tabs/style/react-tabs.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Tabs>
      <TabList>
        <Tab>Airport Infomation</Tab>
        <Tab>Airport Reports</Tab>
      </TabList>
      <TabPanel>
        <StationInfoContainer />
      </TabPanel>
      <TabPanel>
        <h4>Hi</h4>
      </TabPanel>
    </Tabs>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
