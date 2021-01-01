import postResolver from "./posts";
import userResolver from "./users";
import commentResolver from "./comment";
const resolvers = {
  Query: {
    ...postResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...postResolver.Mutation,
    ...commentResolver.Mutation,
  },
};
export default resolvers;
