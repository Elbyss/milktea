import { client } from './sanity_client';

type OAuthUser = {
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  image?: string | null;
};

export async function adduser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    image,
    name,
    following: [],
    followers: [],
    bookmarks: [],
  });
}
