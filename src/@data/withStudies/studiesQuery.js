import gql from 'graphql-tag';

export default gql`
  query getSeries($limit: Int!, $skip: Int!){
    content(channel: "studies", limit: $limit, skip: $skip) {
      id
      entryId: id
      title
      status
      channelName
      meta {
        urlTitle
        siteId
        date
        channelId
      }
      content {
        images(sizes: ["large"]) {
          fileName
          fileType
          fileLabel
          url
        }
        isLight
        colors {
          id
          value
          description
        }
      }
    }
  }
`;
