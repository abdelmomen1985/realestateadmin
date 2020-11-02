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

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { Label, Timeline } from "@material-ui/icons";
import CompPhasesList from "./components/phases/CompPhasesList";
import UnitsList from "./components/units/UnitsList";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://feasible-narwhal-77.hasura.app/v1/graphql",
      headers: {
        //Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();
const headers = { "content-type": "application/json" };
const HASURA_URL = "https://feasible-narwhal-77.hasura.app/";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
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
            list={UnitsList}
            icon={CustomHomeIcon}
            create={UnitCreate}
          />
          <Resource name="leads" list={ListGuesser} icon={CustomCallIcon} />
          <Resource
            name="comp_phases"
            list={CompPhasesList}
            icon={Timeline}
            options={{ label: "Phases" }}
          />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
