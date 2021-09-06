import { ITitleProps } from './@interfaces';

export default function Title({ movies, movieIndex }: ITitleProps) {
  return (
    <h1 className="text-4xl text-white text-center">
      {movies[movieIndex].properties.Name.title[0].plain_text}
    </h1>
  );
}
