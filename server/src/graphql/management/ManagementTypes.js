import { gql } from 'apollo-server';

const ManagementType = gql`
  type Management {
    id: String
    floors: [Int]
    name: String
    position: String
  }
`;

export default ManagementType;
