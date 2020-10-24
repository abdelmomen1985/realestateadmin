import React from "react";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
// @ts-ignore
import hasuraDataProvider from "ra-data-hasura";
import "./App.css";
import { DeveloperList } from "./components/developers/DevelopersList";
import { CompoundsList } from "./components/compounds/CompoundsList";
import { CompoundEdit } from "./components/compounds/CompoundEdit";
import CompoundCreate from "./components/compounds/CompoundCreate";
import { MyAuthProvider } from "./MyAuthProvider";
import PropertyTypeCreate from "./components/property_types/PropertyTypeCreate";
import PropertyTypesList from "./components/property_types/PropertyTypesList";
import PropertyTypeEdit from "./components/property_types/PropertyTypeEdit";
import OutdoorGrillTwoToneIcon from "@material-ui/icons/OutdoorGrillTwoTone";
import ApartmentTwoToneIcon from "@material-ui/icons/ApartmentTwoTone";
import DeveloperCreate from "./components/developers/DeveloperCreate";
import { PeopleAlt } from "@material-ui/icons";
import UsersList from "./components/users/UsersList";
import UserCreate from "./components/users/UserCreate";

const headers = { "content-type": "application/json" };
const HASURA_URL = "https://feasible-narwhal-77.hasura.app/";

function App() {
  return (
    <Admin
      authProvider={new MyAuthProvider()}
      dataProvider={hasuraDataProvider(HASURA_URL, headers)}
    >
      <Resource
        name="developers"
        list={DeveloperList}
        edit={EditGuesser}
        create={DeveloperCreate}
        icon={OutdoorGrillTwoToneIcon}
      />
      <Resource
        name="compounds"
        list={CompoundsList}
        edit={CompoundEdit}
        create={CompoundCreate}
      />
      <Resource
        name="property_types"
        list={PropertyTypesList}
        edit={PropertyTypeEdit}
        create={PropertyTypeCreate}
        icon={ApartmentTwoToneIcon}
        options={{ showStar: false }}
      />
      <Resource
        name="users"
        list={UsersList}
        create={UserCreate}
        icon={PeopleAlt}
      />
    </Admin>
  );
}

export default App;
