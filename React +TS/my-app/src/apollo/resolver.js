import {countries,cities} from "./data.js";

export const resolvers = {
    Query: {
      countries: () => countries,
      cities:() => cities,
      country(parent, args, context, info) {
        return countries.find(country => country.name === args.name);
      }
    },
  };

  export default resolvers;