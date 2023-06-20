export type PostType = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: {
    id: string;
    name: string;
  };
};

export type AuthorType = {
  id: string;
  name: string;
};
