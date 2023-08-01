import { useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';

import Lottie from 'lottie-react';

import { Info } from 'phosphor-react';

import notion from '../services/notion';

import {
  Cover,
  Duration,
  Genres,
  Navigation,
  Platform,
  Title,
} from '../components';

import movieLoadingLottier from '../assets/lottie/movie-loading.json';

import { MovieType } from '../@types/pages/Home/Movies';
import { IHomeProps, IMovie } from '../@interfaces/pages/Home/IHomeProps';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export default function Home({ movie, movies }: IHomeProps) {
  const timeLoadingRef = useRef(0);

  const [movieShown, setMovieShown] = useState<MovieType>(movie);
  const [loadingMovie, setLoadingMovie] = useState(false);

  const totalMovies = movies.length;

  async function getNewMovie() {
    setLoadingMovie(true);

    const randomNumber = Math.floor(Math.random() * totalMovies) + 1;

    setMovieShown(movies[randomNumber]);

    timeLoadingRef.current = window.setTimeout(() => {
      setLoadingMovie(false);
    }, 1500);
  }

  useEffect(() => {
    return () => {
      window.clearTimeout(timeLoadingRef.current);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <Navigation to="/sobre">
        <Info size={40} />
      </Navigation>

      <button
        onClick={getNewMovie}
        type="button"
        disabled={loadingMovie}
        className="h-12 px-4 py-2 mt-16 mb-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buscar Novo Filme
      </button>

      {loadingMovie ? (
        <main className="mt-9">
          <Lottie
            animationData={movieLoadingLottier}
            loop={true}
            style={{
              width: 300,
              height: 300,
            }}
          />

          <h1 className="text-2xl font-bold text-center text-white">
            Carregando...
          </h1>
        </main>
      ) : (
        <>
          <Cover
            cover={movieShown.cover}
            title={movieShown.title}
            loading={loadingMovie}
          />

          <Title
            title={movieShown.title}
            originalTitle={movieShown.originalTitle}
            description={movieShown.sinopse}
          />

          <Genres genres={movieShown.genres} />

          <Duration duration={movieShown.duration} />

          <Platform platforms={movieShown.platforms} />
        </>
      )}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 100,
  });

  const result: (PageObjectResponse | PartialPageObjectResponse)[] =
    response.results;

  while (response.has_more) {
    response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size: 100,
      start_cursor: response.next_cursor,
    });

    result.push(...response.results);
  }

  const totalMovies = result.length;
  const randomNumber = Math.floor(Math.random() * totalMovies) + 1;

  const randomMovie = result[randomNumber] as unknown as IMovie;
  const allMovies = result as unknown as IMovie[];

  const movie = {
    title: randomMovie.properties.Name.title[0].plain_text,
    originalTitle: randomMovie.properties.i18n.rich_text[0].plain_text,
    cover: randomMovie.cover.file.url,
    sinopse: randomMovie.properties.Sinopse.rich_text[0].plain_text,
    platforms: randomMovie.properties['Watch on'].multi_select,
    duration: randomMovie.properties.Duration.rich_text[0].plain_text,
    genres: randomMovie.properties.Genre.multi_select,
  };

  const movies = allMovies.map((movieData) => ({
    title: movieData.properties.Name.title[0].plain_text,
    originalTitle: movieData.properties.i18n.rich_text[0].plain_text,
    cover: movieData.cover.file.url,
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
