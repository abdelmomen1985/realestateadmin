import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Timeline } from "@material-ui/icons";
import ApartmentTwoToneIcon from "@material-ui/icons/ApartmentTwoTone";
import OutdoorGrillTwoToneIcon from "@material-ui/icons/OutdoorGrillTwoTone";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import hasuraDataProvider from "ra-data-hasura";
import React from "react";
import {
  Admin,
  DataProvider,
  LegacyDataProvider,
  ListGuesser,
  Resource,
} from "react-admin";
import AgenciesList from "./agencies/AgenciesList";
import AmenitiesList from "./amenites/AmenitiesList";
import AmenityCreate from "./amenites/AmenityCreate";
import AmenityEdit from "./amenites/AmenityEdit";
import "./App.css";
import CompoundCreate from "./components/compounds/CompoundCreate";
import { CompoundEdit } from "./components/compounds/CompoundEdit";
import { CompoundsList } from "./components/compounds/CompoundsList";
import Dashboard from "./components/dashboard/Dashboard";
import DeveloperCreate from "./components/developers/DeveloperCreate";
import DeveloperEdit from "./components/developers/DeveloperEdit";
import { DeveloperList } from "./components/developers/DevelopersList";
import CompPhasesList from "./components/phases/CompPhasesList";
import PropertyTypeCreate from "./components/property_types/PropertyTypeCreate";
import PropertyTypeEdit from "./components/property_types/PropertyTypeEdit";
import PropertyTypesList from "./components/property_types/PropertyTypesList";
import UnitCreate from "./components/units/UnitCreate";
import { UnitEdit } from "./components/units/UnitEdit";
import UnitsList from "./components/units/UnitsList";
import UserCreate from "./components/users/UserCreate";
import UsersList from "./components/users/UsersList";
import {
  CustomAgenciesIcon,
  CustomAmenitiesIcon,
  CustomCallIcon,
  CustomCompanyIcon,
  CustomHomeIcon,
  CustomTicketsIcon,
  CustomUsersIcon,
} from "./icons";
import { MyAuthProvider } from "./MyAuthProvider";
import buildGraphQLProvider from "ra-data-graphql";
import CompaniesList from "./companies/CompaniesList";
import CompanyCreate from "./companies/CompanyCreate";
import {
  DELETE_COMPANY,
  GET_COMPANIES,
  INSERT_COMPANY,
} from "./queries/companies";
import TicketsList from "./tickets/TicketsList";
import { GET_TICKETS } from "./queries/tickets";

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
};

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://realestatep.hasura.app/v1/graphql",
      headers,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: { fetchPolicy: "network-only" },
    },
  });
};

const client = createApolloClient();

const hasuraDP = hasuraDataProvider(
  `https://realestatep.hasura.app/`,
  headers
) as LegacyDataProvider;

const getCompanies = async () => {
  let resp = await client.query({
    query: GET_COMPANIES,
  });
  return { data: resp.data?.companies, total: resp.data?.companies.length };
};

const getTickets = async () => {
  const resp = await client.query({
    query: GET_TICKETS,
  });
  return { data: resp.data.tickets, total: resp.data.tickets.length };
};

const deleteCompany = async (id: string) => {
  let resp = await client.mutate({
    mutation: DELETE_COMPANY,
    variables: { id },
  });
};

const insertCompany = async (data: any) => {
  let resp = await client.mutate({
    mutation: INSERT_COMPANY,
    variables: data,
  });

  const { id, properties } = resp.data.insert_company;
  return {
    data: {
      id,
      properties,
    },
  };
};

const customDP = {
  getList: (resource, params) => {
    if (resource === "companies") {
      return getCompanies();
    } else if (resource === "tickets") {
      return getTickets();
    }
    return hasuraDP("GET_LIST", resource, params);
  },
  getOne: (resource, params) => {
    return hasuraDP("GET_ONE", resource, params);
  },
  getMany: (resource, params) => {
    return hasuraDP("GET_MANY", resource, params);
  },
  getManyReference: (resource, params) => {
    return hasuraDP("GET_MANY_REFERENCE", resource, params);
  },
  update: (resource, params) => {
    return hasuraDP("UPDATE", resource, params);
  },
  updateMany: (resource, params) => {
    return hasuraDP("UPDATE_MANY", resource, params);
  },
  delete: (resource, params) => {
    console.log("%c Mo2Log  delete ", "background: #bada55", params);
    if (resource === "companies") {
      return deleteCompany("" + params.id);
    }
    // TODO check resource config
    // IF SOTFDELETE then soft delete
    console.log(params.previousData);
    return hasuraDP("DELETE", resource, params);
  },
  deleteMany: (resource, params) => {
    console.log("%c Mo2Log  deleteMany ", "background: #bada55", params);
    if (resource === "companies") {
      let first = params.ids[0];
      // TODO all
      return deleteCompany(first.toString());
    }
    return hasuraDP("DELETE_MANY", resource, params);
  },
  create: (resource, params) => {
    if (resource === "companies") {
      console.log(params);
      return insertCompany(params.data);
    }
    return hasuraDP("CREATE", resource, params);
  },
} as DataProvider;

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Admin
          authProvider={new MyAuthProvider()}
          dataProvider={customDP}
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
            name="agencies"
            list={AgenciesList}
            icon={CustomAgenciesIcon}
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
            icon={CustomUsersIcon}
          />
          <Resource
            name="units"
            list={UnitsList}
            icon={CustomHomeIcon}
            create={UnitCreate}
            edit={UnitEdit}
          />

          <Resource
            name="comp_phases"
            list={CompPhasesList}
            icon={Timeline}
            options={{ label: "Phases" }}
          />
          <Resource
            name="amenities"
            list={AmenitiesList}
            edit={AmenityEdit}
            create={AmenityCreate}
            icon={CustomAmenitiesIcon}
          />
          <Resource
            options={{ label: "CRM Companies" }}
            name="companies"
            icon={CustomCompanyIcon}
            list={CompaniesList}
            create={CompanyCreate}
          />
          <Resource
            name="tickets"
            list={TicketsList}
            icon={CustomTicketsIcon}
            options={{ label: "CRM Tickets" }}
          />
          <Resource
            name="leads"
            list={ListGuesser}
            icon={CustomCallIcon}
            options={{ label: "CRM Leads" }}
          />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
