export type PlatformType = {
  id: string;
  name: string;
  color: string;
}

export type MovieType = {
  title: string;
  originalTitle: string;
  sinopse: string;
  genre: string[];
  cover: string;
  platforms: PlatformType[],
  duration: string;
};
