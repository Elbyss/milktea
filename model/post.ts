export type Comments = {
  comment: string;
  username: string;
  image: string;
};

export type SimplePost = Omit<FullPost, 'comments'> & { comments: number };

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  comments: Comments[];
  likes: string[];
};
