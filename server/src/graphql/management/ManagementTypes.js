import { gql } from "apollo-server";

const ManagementType = gql`
  type Management {
    id: String
    floors: [Int]
    image: String
    name: String
    position: String
    email: String
    rank: Int
  }
`;

export default ManagementType;
