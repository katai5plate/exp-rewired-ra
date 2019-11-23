import React from "react";

import { List, Datagrid, TextField, NumberField } from "react-admin";

const FC: React.FC = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <NumberField source="10" />
      <NumberField source="100" />
      <NumberField source="1000" />
      <NumberField source="10000" />
    </Datagrid>
  </List>
);

export default FC;
