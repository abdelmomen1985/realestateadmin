import { Button, Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import RichTextInput from "ra-input-rich-text";
import React, { useState } from "react";
import {
  Edit,
  FunctionField,
  ResourceComponentInjectedProps,
  SimpleForm,
  TextInput,
} from "react-admin";
import { transformDeveloper } from "../../utils/transforms";
import DropImageToFire from "../utils/DropImageToFire";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fullwidth: {
    width: "100%",
  },
}));

/*
const CustomArea = ({ record = {}, source }: any) => (
  {record?.media?.logoUrl ? <span>img</span> : <span>drop</span>}
)
*/

export default function DeveloperEdit(props: ResourceComponentInjectedProps) {
  const [changeLogo, setChangeLogo] = useState(false);
  const classes = useStyles();
  return (
    <Edit {...props} transform={transformDeveloper} className={classes.root}>
      <SimpleForm>
        {changeLogo ? (
          <DropImageToFire />
        ) : (
          <FunctionField
            fullWidth
            render={(record) => {
              if (record?.media?.logo)
                return (
                  <img
                    src={record?.media?.logo}
                    style={{ maxWidth: "250px" }}
                  />
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
    </Edit>
  );
}
