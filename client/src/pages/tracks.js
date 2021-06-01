import React from 'react';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';
import {useQuery, gql} from '@apollo/client';



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
  //useQury is used to execute our queries from React
  const {loading, error, data} = useQuery(TRACKS);
  
  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map(track => (
        <TrackCard key={track.id} track={track} />
    ))}
    </QueryResult>
  </Layout>
};

export default Tracks;
