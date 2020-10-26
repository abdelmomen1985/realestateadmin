import { Button, Grid } from "@material-ui/core";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";
import React, { useState } from "react";
import {
  FunctionField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
import DropImageToFire from "../utils/DropImageToFire";

export default function CompoundForm(props: any) {
  const classes = useMyDefaultStyles();
  const [changeLogo, setChangeLogo] = useState(false);
  return (
    <SimpleForm {...props}>
      {changeLogo ? (
        <DropImageToFire />
      ) : (
        <FunctionField
          fullWidth
          render={(record) => {
            if (record?.media?.logo)
              return (
                <img src={record?.media?.logo} style={{ maxWidth: "250px" }} />
              );
            return <DropImageToFire />;
          }}
          label="Logo"
        />
      )}
      {!changeLogo && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setChangeLogo(true)}
        >
          Change Image
        </Button>
      )}

      <ReferenceInput source="developer_id" reference="developers">
        <SelectInput optionText="name.en" />
      </ReferenceInput>

      <Grid container spacing={3} className={classes.fullwidth}>
        <Grid item xs={12} md={6}>
          <TextInput source="name.ar" className={classes.fullwidth} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="name.en" className={classes.fullwidth} />
        </Grid>
      </Grid>

      <div className="editor-ar fullwidth">
        <RichTextInput source="description.ar" />
      </div>

      <RichTextInput source="description.en" />
    </SimpleForm>
  );
}
