import gql from 'graphql-tag';

export default gql`
  query givingSummary($start: String!, $end: String!) {
    content: transactions(start: $start, end: $end, limit: 0) {
      id
      date
      details {
        amount
        account {
          name
        }
      }
    }
  }
`;
