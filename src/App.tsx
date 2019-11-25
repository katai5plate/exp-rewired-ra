import React from "react";
import "./App.css";

import { CoreAdmin } from "ra-core";
import { createBrowserHistory as createHistory } from "history";

import { cpusResourceProps, randResourceProps } from "./resourceProps";
import { Dashboard, NotFound } from "./pages";
import { localAPIProvider } from "./providers";

import { Resource } from "react-admin";

const history = createHistory();

const App: React.FC = () => (
  <CoreAdmin
    dataProvider={localAPIProvider}
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
