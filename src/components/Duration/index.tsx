import { IDurationProps } from './@interfaces';

export default function Duration({ movies, movieIndex }: IDurationProps) {
  return (
    <div className="flex flex-row justify-center items-center mt-4">
      <p className="text-white text-lg">Duração</p>
      <p className="text-white ml-2 text-lg">
        {movies[movieIndex].properties.Duração.rich_text[0].plain_text}
      </p>
    </div>
  );
}
