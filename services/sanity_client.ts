import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-01-23', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN,
});

// const doc = {
//   _id: 'my-bike',
//   _type: 'bike',
//   name: 'Sanity Tandem Extraordinaire',
//   seats: 2,
// };
// client.createIfNotExists(doc).then((res) => {
//   console.log('Bike was created (or was already present)');
// });
