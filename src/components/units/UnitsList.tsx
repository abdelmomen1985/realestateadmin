import React from "react";
import {
  ResourceComponentInjectedProps,
  Datagrid,
  ReferenceField,
  List,
  TextField,
  Filter,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

const UnitsListFilter = (props: any) => (
  <Filter {...props}>
    {/**
      <ReferenceInput source="compound_id" reference="compounds">
        <SelectInput optionText="name.en" />
      </ReferenceInput>
      
    <ReferenceInput
      label="Compound"
      source="compound_id"
      reference="compounds"
      alwaysOn
    >
      <SelectInput optionText="name.en" />
    </ReferenceInput>
     */}
    <TextInput
      label="Title"
      source="finishing_type"
      defaultValue="SF"
      alwaysOn
    />
  </Filter>
);

export default function UnitsList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <List {...props} filters={<UnitsListFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="finishing_type" />
        <ReferenceField source="property_type_id" reference="property_types">
          <TextField source="name.en" />
        </ReferenceField>
        <ReferenceField source="compound_id" reference="compounds">
          <TextField source="name.en" />
        </ReferenceField>
        <ReferenceField source="comp_phase_id" reference="comp_phases">
          <TextField source="phase_name.en" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
