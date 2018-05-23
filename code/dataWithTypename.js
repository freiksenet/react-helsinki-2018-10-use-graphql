pictures: [{
  __typename: 'Picture',
  id: 'p1',
  author: {
    __typename: 'User',
    id: 'u1',
    name: 'Mikhail Novikov',
  },
  comments: [{
    __typename: 'Comment',
    id: 'c1',
    text: 'Foo',
    author: {
      __typename: 'User',
      id: 'u2',
      name: 'Viro the Cat',
    },
  }],
}]
