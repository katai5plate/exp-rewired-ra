import React from "react";
import "./App.css";
import jsonServerProvider from "ra-data-json-server";

import { CoreAdmin } from "ra-core";
import { createBrowserHistory as createHistory } from "history";

import { cpusResourceProps, randResourceProps } from "./resourceProps";
import { Dashboard, NotFound } from "./pages";

import { Resource } from "react-admin";

const history = createHistory();

const App: React.FC = () => (
  <CoreAdmin
    dataProvider={jsonServerProvider("http://localhost:3333")}
    history={history}
    dashboard={Dashboard}
    title="ERROR"
    catchAll={NotFound}
  >
    <Resource {...cpusResourceProps} />
    <Resource {...randResourceProps} />
  </CoreAdmin>
);

export default App;

// import fakeDataProvider from "ra-data-fakerest";
// const dataProvider = fakeDataProvider({});
