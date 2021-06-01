import React from 'react';
import { Layout } from '../components';
import {gql} from '@apollo/client';



/** TRACKS query to retrieve all tracks */
// export keyword to the declaration so the query is available in our test cases later on

export const TRACKS = gql` 
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
