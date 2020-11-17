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

const UnitsListFilter = (props: any) => {
  // First get filtered compounds list
  return (
    <Filter {...props}>
      {/**
      <ReferenceInput
        label="Compound"
        source="compound_id"
        reference="compounds"
        alwaysOn
      >
        <SelectInput optionText="name.en" />
      </ReferenceInput>
      */}

      <SelectInput
        alwaysOn
        source="compound_id"
        choices={[{ id: "81550825-6d0a-4393-9431-f4e3caa697af", name: "ZEDD" }]}
      />

      <SelectInput
        source="finishing_type"
        choices={[
          { id: "FF", name: "FF" },
          { id: "SF", name: "SF" },
        ]}
      />
    </Filter>
  );
};

export default function UnitsList(props: ResourceComponentInjectedProps) {
  const classes = useMyDefaultStyles();
  return (
    <List {...props} filters={<UnitsListFilter />}>
      <Datagrid rowClick="edit">
        <TextField
          source="cust_id"
          headerClassName={classes.header}
          label="Unit Ref"
        />
        <TextField source="finishing_type" headerClassName={classes.header} />
        <ReferenceField
          source="property_type_id"
          reference="property_types"
          headerClassName={classes.header}
          linkType={false}
        >
          <TextField source="name.en" />
        </ReferenceField>
        <ReferenceField
          source="compound_id"
          reference="compounds"
          headerClassName={classes.header}
        >
          <TextField source="name.en" />
        </ReferenceField>
        <ReferenceField
          source="comp_phase_id"
          reference="comp_phases"
          headerClassName={classes.header}
        >
          <TextField source="phase_name.en" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
