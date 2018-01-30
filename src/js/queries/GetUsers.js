import gql from 'graphql-tag';

export default gql`
  query {
    users {
      id
      username
    }
  }
`;
