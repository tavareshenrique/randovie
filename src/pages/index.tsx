import { useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';

import notion from '../services/notion';

import Cover from '../components/Cover';
import Title from '../components/Title';
import Duration from '../components/Duration';
import Platform from '../components/Platform';

import { MovieType } from '../@types/pages/Home/Movies';
import { IHomeProps, IMovie } from '../@interfaces/pages/Home/IHomeProps';

export default function Home({ movie, movies }: IHomeProps) {
  const timeLoadingRef = useRef(0);

  const [movieShown, setMovieShown] = useState<MovieType>(movie);
  const [loadingMovie, setLoadingMovie] = useState(false);

  async function getNewMovie() {
    setLoadingMovie(true);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    setMovieShown(movies[randomNumber]);

    timeLoadingRef.current = window.setTimeout(() => {
      setLoadingMovie(false);
    }, 500);
  }

  useEffect(() => {
    window.clearTimeout(timeLoadingRef.current);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <button
        onClick={getNewMovie}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 h-12 md:ml-8 mt-16"
      >
        Buscar Novo Filme
      </button>

      <Cover cover={movieShown.cover} title={movieShown.title} loading={loadingMovie} />

      <Title
        title={movieShown.title}
        originalTitle={movieShown.originalTitle}
        description={movieShown.sinopse}
      />

      <Duration duration={movieShown.duration} />

      <Platform platforms={movieShown.platforms} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const randomMovie = response.results[randomNumber] as unknown as IMovie;

  const allMovies = response.results as unknown as IMovie[];

  const movie = {
    title: randomMovie.properties.Name.title[0].plain_text,
    originalTitle: randomMovie.properties.i18n.rich_text[0].plain_text,
    cover: randomMovie.cover.external.url || randomMovie.cover.file.url,
    sinopse: randomMovie.properties.Sinopse.rich_text[0].plain_text,
    platforms: randomMovie.properties['Watch on'].multi_select,
    duration: randomMovie.properties.Duration.rich_text[0].plain_text,
    genres: randomMovie.properties.Genre.multi_select,
  };

  const movies = allMovies.map((movieData) => ({
    title: movieData.properties.Name.title[0].plain_text,
    originalTitle: movieData.properties.i18n.rich_text[0].plain_text,
    cover: movieData.cover.external?.url || movieData.cover.file.url,
    sinopse: movieData.properties.Sinopse.rich_text[0].plain_text,
    platforms: movieData.properties['Watch on'].multi_select,
    duration: movieData.properties.Duration.rich_text[0].plain_text,
    genres: movieData.properties.Genre.multi_select,
  }));

  return {
    props: {
      movie,
      movies,
    },
  };
};
