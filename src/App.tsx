import PeopleAlt from "@material-ui/icons/PeopleAlt";
import ApartmentTwoToneIcon from "@material-ui/icons/ApartmentTwoTone";
import OutdoorGrillTwoToneIcon from "@material-ui/icons/OutdoorGrillTwoTone";
// @ts-ignore
import hasuraDataProvider from "ra-data-hasura";
import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import "./App.css";
import CompoundCreate from "./components/compounds/CompoundCreate";
import { CompoundEdit } from "./components/compounds/CompoundEdit";
import { CompoundsList } from "./components/compounds/CompoundsList";
import Dashboard from "./components/dashboard/Dashboard";
import DeveloperCreate from "./components/developers/DeveloperCreate";
import DeveloperEdit from "./components/developers/DeveloperEdit";
import { DeveloperList } from "./components/developers/DevelopersList";
import PropertyTypeCreate from "./components/property_types/PropertyTypeCreate";
import PropertyTypeEdit from "./components/property_types/PropertyTypeEdit";
import PropertyTypesList from "./components/property_types/PropertyTypesList";
import UserCreate from "./components/users/UserCreate";
import UsersList from "./components/users/UsersList";
import { MyAuthProvider } from "./MyAuthProvider";
import CustomHomeIcon from "./icons/CustomHomeIcon";
import UnitCreate from "./components/units/UnitCreate";
import CustomCallIcon from "./icons/CustomCallIcon";
import { CompoundPhases } from "./components/compounds/CompoundPhases";

const headers = { "content-type": "application/json" };
const HASURA_URL = "https://feasible-narwhal-77.hasura.app/";

function App() {
  return (
    <>
      <Admin
        authProvider={new MyAuthProvider()}
        dataProvider={hasuraDataProvider(HASURA_URL, headers)}
        dashboard={Dashboard}
      >
        <Resource
          name="developers"
          list={DeveloperList}
          edit={DeveloperEdit}
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
        <Resource
          name="units"
          list={ListGuesser}
          icon={CustomHomeIcon}
          create={UnitCreate}
        />
        <Resource name="leads" list={ListGuesser} icon={CustomCallIcon} />
        <Resource name="comp_phases" />
      </Admin>
    </>
  );
}

export default App;
