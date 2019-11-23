import React from "react";
import "./App.css";
import jsonServerProvider from "ra-data-json-server";
import fakeDataProvider from "ra-data-fakerest";

import { Admin, Resource, ListGuesser } from "react-admin";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
