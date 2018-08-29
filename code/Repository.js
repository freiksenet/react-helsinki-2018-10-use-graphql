const Repository = ({ repository }) => (
  <div>
    <h2>{repository.name}</h2>
  </div>
)

Repository.fragments = {
  RepositoryFragment: gql`fragment RepositoryFragment on Repository {
    name
  }`
}
