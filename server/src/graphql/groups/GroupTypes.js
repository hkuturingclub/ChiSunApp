import { gql } from "apollo-server";

const groupType = gql`
  type Group {
    id: String
    category: String
    contact_name: String
    contact_number: String
    description: String
    image: String
    link: String
    name: String
    slug: String
  }
`;

export default groupType;
