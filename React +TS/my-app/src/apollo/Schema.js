import { gql } from 'apollo-server';


const typeDefs = gql`
  type Country {
    name: String
    population: Int
    cities:[City]
  }

  type City {
    name: String
  }

  type Query {
    countries: [Country],
    country(name:String!): Country!,
    cities: [City]
  }
`;



export default typeDefs;