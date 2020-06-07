import { gql } from "apollo-server";

const eventType = gql`
  type Event {
    id: String
    name: String
    description: String
    image: String
    startDate: String
    location: String
  }
`;

export default eventType;
