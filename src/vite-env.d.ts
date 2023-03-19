/// <reference types="vite/client" />

export type SinglePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsType = {
  posts: SinglePostType[];
};
