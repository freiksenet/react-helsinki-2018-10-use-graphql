// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fit,
  Fill,
  Appear,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import ImageSlide from 'spectacle-image-slide';

import { css } from 'react-emotion';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#B45A81',
    secondary: 'black',
    tertiary: '#2D4E00',
    quartenary: '#AA6339',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const biggerFont = css`
  font-size: 20px;
`;

const smallerFont = css`
  font-size: 20px;
`;

const biggishFont = css`
  font-size: 18px;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide transition={['zoom', 'spin']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
          <Text margin="10px 0 0" size={1} fit bold>
            it's time to use it
          </Text>
          <Text margin="20% 0 0" textColor="secondary" size={6}>
            Mikhail Novikov
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            @freiksenet
          </Text>
          <Image
            display="inline-block"
            margin="20px 0 0 "
            src={require('../assets/logo-dark.svg')}
            alt="Reindex"
            height={100}
          />
        </Slide>

        <Slide
          transition={['zoom', 'spin']}
          bgImage={require('../assets/cats2.jpg')}
        >
          <Heading textColor="white" size={5}>
            @freiksenet
          </Heading>
          <Text textColor="white">Reindex</Text>
          <Text textColor="white">GraphQL Finland</Text>
          <Text textColor="white">Apollo Launchpad</Text>
          <Text textColor="white">graphql-tools</Text>
          <Text textColor="white">GraphQL delegation</Text>
          <Text textColor="white">GraphQL stitching</Text>
          <Text textColor="white">Gatsby GraphQL</Text>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Contents
          </Heading>
          <Appear>
            <Text size={1} margin="10% 0 0">
              what is GraphQL
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="10px 0 0">
              GraphQL on client
            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="10px 0 0">
              strategies for adopting GraphQL
            </Text>
          </Appear>
        </Slide>
        {/*
          * What is GraphQL?
          * Overview of the problem
          * Overview of the features
          * Why GraphQL adoption has been so hard
          * GraphQL myths
          ** not a database query language
          ** not a javascript only tool
          ** not about graph databases
          ** is not something only frontend developers should want */}
        <Slide bgColor="tertiary">
          <Heading caps lineHeight={1} textColor="secondary">
            GraphQL?
          </Heading>
          <Appear><Heading textColor="primary" caps>Wut?</Heading></Appear>
        </Slide>
        <Slide>
          <Heading>The problem definition</Heading>
          <Appear><Text>there is a gap between client and server developer needs and values</Text></Appear>
        </Slide>
        <Slide>
          <Heading>Client requirements change faster than backend</Heading>
        </Slide>
        <Slide>
          <Heading>Client usually has faster development iterations</Heading>
        </Slide>
        <Slide>
          <Heading>Client developers want more flexibility and performance</Heading>
        </Slide>
        <Slide>
          <Heading>Backend is something client developers work around</Heading>
        </Slide>
        <Slide>
          <Heading>GraphQL</Heading>
          <Text>matching server capabilities with client requirements</Text>
        </Slide>


        <Slide bgColor="tertiary">
         <Heading caps lineHeight={1} textColor="secondary">
           GraphQL 101
         </Heading>
        </Slide>

        <Slide>
          <Heading>GraphQL parts</Heading>
          <Text margin="10% 0 0">schema definition (type system)</Text>
          <Text size={1} margin="10px 0 0">query language for the capabilities (queries)</Text>
          <Text size={1} margin="10px 0 0">language/framework specific executor</Text>
        </Slide>

        <Slide>
          <Heading>Schema</Heading>
          <Appear>
            <Text size={1} margin="10% 0 0">
              A graph of connected types
                        </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="10px 0 0">
logical view, not database view            </Text>
          </Appear>
          <Appear>
            <Text size={1} margin="10px 0 0">
Set of *root fields*, from which queries start
            </Text>
          </Appear>

        </Slide>

        <CodeSlide
          bgColor="tertiary"
          color="secondary"
          transition={[]}
          lang="graphql"
          code={typeDef1}
          ranges={[
            { loc: [0, 18], title: "Schema example" },
            { loc: [0, 18], title: "Using GraphQL schema language"},
            { loc: [0, 7], note: "Type definition" },
            { loc: [1, 2], note: "Field with type"},
            { loc: [2, 3], note: "Several built in scalar types"},
            { loc: [4, 5], note: "Link to another type"},
            { loc: [10, 11], note: "List of other type"},
            { loc: [13, 18], note: "Root fields"},
            { loc: [13, 18], note: "Fields can define arguments"},
          ]} />

        <Slide>
          <Heading>Queries</Heading>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 20px 0">
            Basic GraphQL query
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <div>

                <Text size={6} margin="0 0 10px 0">
                  GraphQL query
                </Text>
                <CodePane
                  className={biggerFont}
                  lang="graphql"
                  source={query1}
                />
              </div>
              </Appear>
            </Fill>
            <Fit>
              <div style={{ width: 20 }} />
            </Fit>
            <Fill>
              <Appear>
                <div>
                <Text size={6} margin="0 0 10px 0">
                  Result
                </Text>
                <CodePane
                  className={biggerFont}
                  lang="graphql"
                  source={result1}
                />
              </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 20px 0">
            Nested GraphQL query
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <div>

                <Text size={6} margin="0 0 10px 0">
                  GraphQL query
                </Text>
                <CodePane
                  className={biggerFont}
                  lang="graphql"
                  source={query2}
                />
              </div>
              </Appear>
            </Fill>
            <Fit>
              <div style={{ width: 20 }} />
            </Fit>
            <Fill>
              <Appear>
                <div>
                <Text size={6} margin="0 0 10px 0">
                  Result
                </Text>
                <CodePane
                  className={biggerFont}
                  lang="graphql"
                  source={result2}
                />
              </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 20px 0">
            Arguments in GraphQL
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <div>

                <Text size={6} margin="0 0 10px 0">
                  GraphQL query
                </Text>
                <CodePane
                  className={biggerFont}
                  lang="graphql"
                  source={query3}
                />
              </div>
              </Appear>
            </Fill>
            <Fit>
              <div style={{ width: 20 }} />
            </Fit>
            <Fill>
              <Appear>
                <div>
                <Text size={6} margin="0 0 10px 0">
                  Result
                </Text>
                <CodePane
                  className={biggerFont}
                  lang="graphql"
                  source={result3}
                />
              </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading>Executor</Heading>
          <Text>checks query against schema</Text>
          <Text>fullfils the schema</Text>
          <Text>graphql-js, graphql-java, graphene, graphql-php...</Text>
        </Slide>

        <Slide bgColor="tertiary">
         <Heading caps lineHeight={1} textColor="secondary">
           GraphQL is amazing on the client
         </Heading>
        </Slide>


        <Slide>
          <Heading>GraphQL clients</Heading>
        </Slide>

        <Slide>
          <Text>Full solution to client-side caching of server data</Text>
        </Slide>

        <Slide>
          <Text>Apollo Client</Text>
          <Text>Relay</Text>
          <Text>urql, graphql-request, react-reach</Text>
        </Slide>

        <Slide>
          <Heading>Selecting only data you need</Heading>
        </Slide>

        <CodeSlide
          bgColor="tertiary"
          color="secondary"
          transition={[]}
          lang="graphql"
          code={require('../code/RootComponent.js')}
          ranges={[
            { loc: [0, 30], title: "Basic GraphQL example" },
            { loc: [0, 30], title: "using react-apollo"},
            { loc: [0, 10], note: "Data that we need to render our UI" },
            { loc: [12, 13], note: "Component to request that data"},
            { loc: [13, 14], note: "Render prop to handle loading state"},
            { loc: [12, 13], note: "Subsequent renders will use cache"},
            { loc: [18, 25], note: "Render as you'd do with props"},
          ]} />


        <Slide>
          <Heading>Maps great to component model</Heading>
        </Slide>

        <CodeSlide
          bgColor="tertiary"
          color="secondary"
          transition={[]}
          lang="graphql"
          code={require('../code/RootComponent.js')}
          ranges={[
            { loc: [0, 30], title: "Repository should be it's own component"},
            { loc: [0, 10], note: "Data that we need to render our UI" },
            { loc: [3, 4], note: "This data parent needs to render the heading"},
            { loc: [4, 7], note: "But this data is only need in Repository"},
          ]} />

          <Slide>
            <Heading size={6} margin="0 0 20px 0">
              Fragments
            </Heading>
            <Layout>
              <Fill>
                <Appear>
                  <div>

                  <Text size={6} margin="0 0 10px 0">
                    GraphQL query
                  </Text>
                  <CodePane
                    className={biggerFont}
                    lang="graphql"
                    source={`query {
  viewer {
    username
      repositories {
        name
      }
    }
  }`}
                  />
                </div>
                </Appear>
              </Fill>
              <Fit>
                <div style={{ width: 20 }} />
              </Fit>
              <Fill>
                <Appear>
                  <div>
                  <Text size={6} margin="0 0 10px 0">
                    With fragment
                  </Text>
                  <CodePane
                    className={biggerFont}
                    lang="graphql"
                    source={`query {
  viewer {
    username
      repositories {
        ...RepositoryFragment
      }
    }
  }

  fragment RepositoryFragment on Repository {
    name
  }`}
                  />
                </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

        <Slide>
          <Text>With fragments, each component can define it's data requirements</Text>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 20px 0">
            Collocation
          </Heading>          <CodePane
            className={biggerFont}
            lang="js"
            source={require('../code/Repository.js')}
          />
        </Slide>


        <Slide>
          <Text>Collocated fragments + TypeScript codegen</Text>
        </Slide>


                <Slide>
                  <Heading size={6} margin="0 0 20px 0">
                    Typescript
                  </Heading>                    <CodePane
                    className={biggerFont}
                    lang="js"
                    source={require('../code/Repository.ts')}
                  />
                </Slide>



        <Slide>
          <Heading>Introspective nature enables tooling</Heading>
        </Slide>

        <Slide>
          <Image src="https://cdn-images-1.medium.com/max/2000/1*adGjZ9lofuO_ohkmlqtZvg.gif" />
        </Slide>

        <Slide>
          <Image src="https://camo.githubusercontent.com/97dc1080d5e6883c4eec3eaa6b7d0f29802e6b4b/687474703a2f2f672e7265636f726469742e636f2f497379504655484e5a342e676966" />
        </Slide>

        <Slide bgColor="tertiary">
         <Heading caps lineHeight={1} textColor="secondary">
           How to adopt GraphQL in your organization?
         </Heading>
        </Slide>

        <Slide>
          <Text>Client developers drive GraphQL adoption</Text>
        </Slide>

        <Slide>
          <Text>
            But we need to convince backend developers
          </Text>
        </Slide>


        <Slide>
          <Image src={require('../assets/haha.png')} />
        </Slide>

        <Slide bgColor="tertiary">
         <Heading caps lineHeight={1} textColor="secondary">
           GraphQL is great for backend too!
         </Heading>
        </Slide>

        <Slide>
          <Text>GraphQL gives backend engineer <b>more</b> control, not less</Text>
        </Slide>

        <Slide>
          <Text>
            Schema is a contract between backend and frontend
          </Text>
        </Slide>

        <Slide>
          <Text>
            GraphQL encourages designing schema for specific, not general case
          </Text>
        </Slide>

        <Slide>
          <Text>
            GraphQL is source agnostic, enabling easy refactoring of backend
          </Text>
        </Slide>

        <Slide>
          <Text>
            GraphQL can be incrementally adopted, reusing existing systems
          </Text>
        </Slide>

          {/* <Slide>
            <Heading>
              GraphQL-only
            </Heading>
            <Appear>
              <Text size={1} margin="10% 0 0">
                custom server
              </Text>
            </Appear>
            <Appear>
              <Text size={1} margin="10px 0 0">
                BaaS like AWS AppSync, GraphCMS
              </Text>
            </Appear>
            <Appear>
              <Text size={1} margin="10px 0 0">
                GraphQL ORMs like Prisma, Hasura, Postgraphile
              </Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading>
              GraphQL over REST
            </Heading>
            <Appear>
              <Text size={1} margin="10% 0 0">
                Wrapper over existing REST API
              </Text>
            </Appear>
            <Appear>
              <Text size={1} margin="10px 0 0">
                Partial wrappers also possible
              </Text>
            </Appear>
            <Appear>
              <Text size={1} margin="10px 0 0">
                Great to upgrade legacy APIs
              </Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading>
              GraphQL gateway
            </Heading>
            <Appear>
              <Text size={1} margin="10% 0 0">
                Aggregating data from multiple microservices
              </Text>
            </Appear>
            <Appear>
              <Text size={1} margin="10px 0 0">
                Could also integrate 3rd party APIs
              </Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading>
              GraphQL microservices
            </Heading>
            <Appear>
              <Text size={1} margin="10px 0 0">
                Automatically merging GraphQL APIs with schema stitching
              </Text>
            </Appear>
          </Slide> */}

        <Slide bgColor="tertiary">
         <Heading caps lineHeight={1} textColor="secondary">
           GraphQL adoption is explosive!
         </Heading>
         <Text>GitHub, Shopify, Coursera, Microsoft, Airbnb...</Text>
         <Text>AWS has GraphQL services (AppSync)</Text>
       </Slide>

        <Slide bgColor="tertiary">
         <Heading caps lineHeight={1} textColor="white">
           GraphQL Finland
         </Heading>
         <Text textColor="white">18-19th October</Text>
         <Text>Paasitorni, Helsinki</Text>
         <Text textColor="primary">Use code "REACTHELSINKI" to get 20% discount!</Text>
        </Slide>

        <Slide
          transition={['zoom', 'spin']}
          bgImage={require('../assets/cats3.jpg')}
        >
          <Heading size={4} lineHeight={1} textColor="white">
            Thank you!
          </Heading>
          <Text size={5} margin="20px 0 0 0" textColor="white">
            @freiksenet
          </Text>
          <Appear>
            <Text size={5} margin="20px 0 0 0" textColor="white">
              (cats ig @viro.and.vinny)
            </Text>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}

const gql = arg => arg.join('');

const typeDef1 = gql`type Repository {
  id: ID!
  name: String!
  url: String!
  author: User!
}

type User {
  id: ID!
  username: String!
  repositories: [Repository]
}

type Query {
  user: User
  repositoryById(id: ID!): Repository
  userById(id: ID!): User
}`

const query1 = gql`query {
  user {
    id
    username
  }
}`

const result1 = `{
  user: {
    id: '1',
    username: 'freiksenet',
  }
}`

const query2 = gql`query {
  user {
    id
    username
    repositories {
      name
    }
  }
}`

const result2 = `{
  user: {
    id: '1',
    username: 'freiksenet',
    repositories: [{
      name: 'www.freiksenet.com',
    }],
  },
}`

const query3 = gql`query {
  repositoryById(id: "www.freiksenet.com") {
    id
    name
    author {
      username
    }
  }
}`

const result3 = `{
  repositoryById: {
    id: 'www.freiksenet.com',
    name: 'www.freiksenet.com',
    author: {
      username: 'freiksenet',
    },
  },
}`
