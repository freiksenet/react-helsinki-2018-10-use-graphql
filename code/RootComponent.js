const APP_QUERY = gql`
  query {
    viewer {
      username
      repositories {
        name
      }
    }
  }
`

const App = () => (
  <Query query={APP_QUERY}>
    {(loading, data) => {
      if (loading) {
        return <div>Loading...</div>
      } else {
        return (
          <div>
            <h1>{data.viewer.usernamename}</h1>
            <div>{data.viewer.repositories.map(({ name }) => (
              <h2>{name}</h2>
            ))}</div>
          </div>
        )
      }
    }}
  </Query>
)
