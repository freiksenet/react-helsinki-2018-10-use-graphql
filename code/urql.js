let query = gql`
  {
    pictures {
      id
      url
      comments {
        id
        text
      }
    }
  }
`;

<Query query={query}>
  {({data}) => {
    // Render stuff
  }}
</Query>
