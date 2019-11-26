import React from "react";
import "./App.css";

import { createBrowserHistory as createHistory } from "history";
import { Admin, Resource } from "react-admin";

import { cpusResourceProps, randResourceProps } from "./resourceProps";
import { Dashboard, NotFound } from "./pages";
import { localAPIProvider } from "./providers";

const history = createHistory();

const App: React.FC = () => (
  <Admin
    dataProvider={localAPIProvider}
    history={history}
    dashboard={Dashboard}
    title="ERROR"
    catchAll={NotFound}
  >
    <Resource {...cpusResourceProps} />
    <Resource {...randResourceProps} />
  </Admin>
);

export default App;

// import fakeDataProvider from "ra-data-fakerest";
// const dataProvider = fakeDataProvider({});
