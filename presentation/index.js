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
            GraphQL Client-side Caches
          </Heading>
          <Text margin="10px 0 0" size={1} fit bold>
            why, how and what next
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
          <Text textColor="white">Apollo Launchpad</Text>
          <Text textColor="white">graphql-tools</Text>
          <Text textColor="white">GraphQL delegation</Text>
          <Text textColor="white">GraphQL stitching</Text>
          <Text textColor="white">GraphQL transforms</Text>
        </Slide>
        {/* <Slide bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Contents
          </Heading>
          <Appear><Text size={1} margin="10% 0 0">why</Text></Appear>
          <Appear><Text size={1}  margin="10px 0 0">how</Text></Appear>
          <Appear><Text size={1} margin="10px 0 0" >what next</Text></Appear>
        </Slide> */}

        <Slide bgColor="primary">
          <Text size={1} caps>
            client-side cache
          </Text>
          <Text size={1} textColor="tertiary">
            aka
          </Text>
          <Appear>
            <Text size={1}>api/graphql client</Text>
          </Appear>
          <Appear>
            <Text size={1}>client state management</Text>
          </Appear>
          <Appear>
            <Text size={1}>Redux :)</Text>
          </Appear>
          <Appear>
            <Text size={1}>MobX, Flux, Ember Data</Text>
          </Appear>
          <Appear>
            <Text size={1}>Apollo Client, Relay, urql</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading>Cache ≤ State</Heading>
        </Slide>

        {/* ---------------------------------------------------------------- */}

        <Slide bgColor="tertiary" transition={['zoom', 'spin']}>
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            Why do you need a cache?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps>
            Perfect cache
          </Heading>
        </Slide>

        {/* only fetching data once */}

        <Slide>
          <Heading size={1}>Fetch only once</Heading>
        </Slide>

        {/* using fetched data in different contexts */}

        <Slide>
          <Heading size={1}>Reuse in different contexts</Heading>
        </Slide>

        {/* knowing what data you have */}

        <Slide>
          <Heading size={1}>Handle data completeness</Heading>
        </Slide>

        {/* invalidation & cache updates */}

        <Slide>
          <Heading size={1}>
            Update <br /> after mutations
          </Heading>
        </Slide>

        {/* do as much as possible without writing code */}

        <Slide>
          <Heading size={1}>With the least code possible</Heading>
        </Slide>

        {/* ---------------------------------------------------------------- */}

        <Slide bgColor="tertiary" transition={['zoom', 'spin']}>
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            Implementations
          </Heading>
        </Slide>

        {/* caching by request */}

        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Resource caching
          </Heading>
        </Slide>

        {/* fetch only once, can't reuse in contexts, invalidate by query, can't handle data completeness, small amount of code */}

        <Slide>
          <Heading size={5}>Resource caching</Heading>
          <Text margin="25px 0 0 0">
            <Code>{'/pictures'}</Code>
          </Text>
          <Text margin="10px 0 0 0">
            <Code>{'/pictures/5'}</Code>
          </Text>
          <Text margin="10px 0 0 0">
            <Code>{'/me'}</Code>
          </Text>
        </Slide>

        {/* <Slide>
          <Text size={6} margin="0 0 20px 0">
            Resource caching
          </Text>

          <CodePane
            className={biggerFont}
            lang="js"
            source={require('../code/resourcescaching.js')}
          />
        </Slide> */}

        <Slide>
          <Heading size={5}>Resource caching</Heading>
          <Text>✓ fetch only once</Text>
          <Text>✕ reuse in contexts</Text>
          <Text>⚒ update on mutation</Text>
          <Text>✕ data completeness</Text>
          <Text>✓ small amount of code</Text>
        </Slide>

        <Slide>
          <Heading size={5}>urql</Heading>
          <Appear>
            <Text>GraphQL resource caching</Text>
          </Appear>
          <Appear>
            <Text>GraphQL queries as resources</Text>
          </Appear>
          <Appear>
            <Text>Invalidation in mutations</Text>
          </Appear>
        </Slide>

        {/* show REST, show urql */}
        {/* <Slide>
          <Text size={6} margin="0 0 20px 0">
            urql
          </Text>

          <CodePane
            className={biggerFont}
            lang="js"
            source={require('../code/urql.js')}
          />
        </Slide> */}


        {/* normalization, caching by id */}

        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Object caching
          </Heading>
        </Slide>

        <Slide>
          <Heading size={5}>Object caching</Heading>
          <Text margin="25px 0 0 0">
            <Code>{'PictureList'}</Code>
          </Text>
          <Text margin="10px 0 0 0">
            <Code>{'Picture[5]'}</Code>
          </Text>
          <Text margin="10px 0 0 0">
            <Code>{'User'}</Code>
          </Text>
        </Slide>

        {/* <Slide>
          <Text size={6} margin="0 0 20px 0">
            Object caching
          </Text>

          <CodePane
            className={biggerFont}
            lang="js"
            source={require('../code/manualobject.js')}
          />
        </Slide> */}

        {/* fetch once, reuse in context, invalidation by id */}

        {/* show result */}

        {/* mapping is manual unless API can provide metadata */}

        {/* metadata needed is a) name of type b) some unique key */}

        <Slide>
          <Heading size={5}>Object caching</Heading>
          <Text>✓ fetch only once</Text>
          <Text>✓ reuse in contexts</Text>
          <Text>⚒ update on mutation</Text>
          <Text>⚒ data completeness</Text>
          <Text>✕ small amount of code</Text>
        </Slide>

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Manual object normalization
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/data.js')}
          />
        </Slide>

        {/* SHOW METADATA __TYPENAME */}

        <Slide>
          <Heading fit>But what if we knew the types?</Heading>
        </Slide>

        {/* metadata is needed to know what data is available, otherwise check manually */}

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Object normalization through metadata
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/dataWithTypename.js')}
          />
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Apollo Client
          </Heading>
        </Slide>

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Query
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/pictures.graphql')}
          />
        </Slide>


        <Slide>
          <Heading size={5}>Apollo Client</Heading>
          <Text margin="25px 0 0 0">
            <Code>{'Picture:5'}</Code>
          </Text>
          <Text margin="10px 0 0 0">
            <Code>{'User:10'}</Code>
          </Text>
          <Text margin="10px 0 0 0">
            <Code>{'ROOT_QUERY'}</Code>
          </Text>
        </Slide>

        {/* GRAPHQL DOES THAT ALREADY */}

        {/* show example with Apollo */}

        {/* bonus: can know what data is fetched, manual otherwise */}

        {/* talk about updating stuff by id automatically and getting updates */}

        <Slide>
          <Heading size={5}>Apollo Client</Heading>
          <Text>✓ fetch only once</Text>
          <Text>⚒ reuse in contexts</Text>
          <Text>✓ update on mutation</Text>
          <Text>✓ data completeness</Text>
          <Text>❓ small amount of code</Text>
        </Slide>

        {/*
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why you can do it with GraphQL?
          </Heading>
        </Slide> */}

        <Slide>
          <Heading size={6} margin="0 0 20px 0">
            Reuse in context
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <div>

                  <Text size={6} margin="0 0 10px 0">
                    List
                  </Text>
                  <CodePane
                    className={biggerFont}
                    lang="graphql"
                    source={require('../code/shortPictures.graphql')}
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
                    Item
                  </Text>
                  <CodePane
                    className={biggerFont}
                    lang="graphql"
                    source={require('../code/onePicture.graphql')}
                  />
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        {/* while apollo does that, handling switching context is more manual */}

        <Slide>
          <Heading>✨</Heading>
          <Heading fit>We can do more magic!</Heading>
          <Heading>✨ </Heading>
        </Slide>

        {/* knowing your api is the key */}

        {/* you can know your api with metadata or by restricting the api */}

        {/* graphQL is introspectable, both beforehand (introspection queries) and in runtime (__typename) */}

        <Slide>
          <Heading>What if we knew more about our API?</Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Relay
          </Heading>
        </Slide>

        {/* take Relay Compatible GraphQL */}

        {/* restriction over what you can have in api, but more powerful client */}

        {/* node interface */}

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Node interface
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/node.graphql')}
          />
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 20px 0">
            Reuse in context Relay
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <div>

                  <Text size={6} margin="0 0 10px 0">
                    List
                  </Text>
                  <CodePane
                    className={biggerFont}
                    lang="graphql"
                    source={require('../code/shortPictures.graphql')}
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
                    Item
                  </Text>
                  <CodePane
                    className={biggerFont}
                    lang="graphql"
                    source={require('../code/onePictureNode.graphql')}
                  />
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

            {/* <Slide>
              <Text size={6} margin="0 0 20px 0">
                Connections
              </Text>

              <CodePane
                className={biggerFont}
                lang="graphql"
                source={require('../code/relayconnection.graphql')}
              />
            </Slide> */}

        {/* more powerful reuse in context */}

        {/* relay connections */}

        <Slide>
          <Heading size={5}>Relay</Heading>
          <Text>✓ fetch only once</Text>
          <Text>✓ reuse in contexts</Text>
          <Text>✓ update on mutation</Text>
          <Text>✓ data completeness</Text>
          <Text>❓ small amount of code</Text>
        </Slide>

        <Slide>
          <Heading fit>Does it have to be restrictive?</Heading>
        </Slide>

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Node interface v2
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/nodeNew.graphql')}
          />
        </Slide>

        {/* restrictions are abritrary at the end */}

        {/* more work can be done for updating mutations */}

        {/* ---------------------------------------------------------------- */}

        {/* why does this really work? talk about knowing your api */}

        {/* more advanced stuff */}

        {/* relay, fetching data once */}

        {/* relay and node interface */}

        {/* relay and connections */}

        {/* how limiting api helps */}

        {/* optimizing your queries with compilation */}

        {/* sum-up

          knowing your api is a key for perfect client-side caches
          you can know your api by either restricting it or using metadata
          graphql already gives you metadata, enabling great clients

          */}

        {/* ---------------------------------------------------------------- */}

        <Slide bgColor="tertiary" transition={['zoom', 'spin']}>
          <Heading size={1} caps lineHeight={1} textColor="quartenary">
            Future
          </Heading>
        </Slide>

        <Slide>
          <Heading fit>The key is knowing your API</Heading>
        </Slide>

        <Slide>
          <Heading fit>Metadata is how cache knows API</Heading>
        </Slide>

        <Slide>
          <Heading fit>Introspection on compile-time to get metadata</Heading>
        </Slide>

        <Slide>
          <Heading caps>More<br /> metadata <br/> for<br/> metadata<br/> god!</Heading>
        </Slide>

        <Slide>
          <Heading fit size={5}>
            GraphQL annotations
          </Heading>
          <Text>Attach metadata to types or fields</Text>
        </Slide>

        {/* marking canonical getters for types */}

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Type annotations
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/typefetcher.graphql')}
          />
        </Slide>

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Type annotations 2
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/typefetcher2.graphql')}
          />
        </Slide>

        {/* canonical fetchers for fields, lists, types */}

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Field annotations
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/fieldFetcher.graphql')}
          />
        </Slide>

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            List annotations
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/connections.graphql')}
          />
        </Slide>

        <Slide>
          <Text size={6} margin="0 0 20px 0">
            Server-side mutations
          </Text>

          <CodePane
            className={biggerFont}
            lang="graphql"
            source={require('../code/serversidemutations.graphql')}
          />
        </Slide>

        {/* unique key based fetchers on fields */}

        {/* server side mutations */}

        {/* for graphql, precompiling queries to see data dependencies */}

        <Slide>
          <Heading fit>Just scratching the surface!</Heading>
          <Text margin="10px 0 0 0">This is practically unexplored area!</Text>
          <Appear><Text margin="10px 0 0 0">Compilable caches from schema ✨</Text></Appear>
          <Appear><Text margin="10px 0 0 0">Invalidation through query intersections ✨</Text></Appear>
        </Slide>

        <Slide>
          <Heading margin="0 0 20px 0">Conclusions</Heading>
          <Appear>
            <Text margin="0 0 10px 0">GraphQL lets us build smart caches</Text>
          </Appear>
          <Appear>
            <Text margin="0 0 10px 0">Metadata is the key</Text>
          </Appear>
          <Appear>
            <Text margin="0 0 10px 0">
              GraphQL has first-class introspection
            </Text>
          </Appear>
          <Appear>
            <Text margin="0 0 10px 0">We can and should use it more</Text>
          </Appear>
          <Appear>
            <Text margin="0 0 10px 0">Future is wonderful!</Text>
          </Appear>
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
