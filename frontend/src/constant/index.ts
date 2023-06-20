export interface iBlogCardProp {
  post: iBlogCard;
}

export interface iBlogCard {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  imageUrl: string;
}
