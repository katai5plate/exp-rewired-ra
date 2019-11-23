import React from "react";

import { List, Datagrid, TextField, NumberField } from "react-admin";

const FC: React.FC = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="model" />
      <NumberField source="speed" />
      <NumberField source="times.user" />
      <NumberField source="times.nice" />
      <NumberField source="times.sys" />
      <NumberField source="times.idle" />
      <NumberField source="times.irq" />
    </Datagrid>
  </List>
);

export default FC;
