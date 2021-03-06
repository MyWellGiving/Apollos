import gql from 'graphql-tag';

export default gql`
  query GetEntriesFromStudy($id: ID!) {
    content: node(id: $id) {
      ... on Content {
        studyEntries: children(channels: ["study_entries"], showFutureEntries: true) {
          id
          entryId: id
          title
          status
          channelName
          parent {
            entryId: id
          }
          meta {
            urlTitle
            siteId
            date
            channelId
          }
          content {
            speaker
          }
        }
      }
    }
  }
`;
