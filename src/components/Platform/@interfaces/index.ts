import { MovieType } from '../../../@types/pages/Home/Movies';

export interface IPlatformProps {
  movies: MovieType[];
  movieIndex: number;
  handleMovie: () => void;
}
