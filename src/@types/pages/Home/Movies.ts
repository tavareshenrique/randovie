export type PlatformType = {
  id: string;
  name: string;
  color: string;
};

export type TGenre = {
  id: string;
  name: string;
};

export type MovieType = {
  title: string;
  originalTitle: string;
  sinopse: string;
  genres: TGenre[];
  cover: string;
  platforms: PlatformType[];
  duration: string;
};
