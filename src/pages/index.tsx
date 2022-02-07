import { useState } from 'react';
import { GetServerSideProps } from 'next';

import { BrowserView } from 'react-device-detect';
import notion from '../services/notion';

import Container from '../components/Container';
import Cover from '../components/Cover';
import Title from '../components/Title';
import Duration from '../components/Duration';
import Platform from '../components/Platform';

import { MovieType } from '../@types/pages/Home/Movies';
import { IHomeProps, IMovie } from '../@interfaces/pages/Home/IHomeProps';

export default function Home({ movie, movies }: IHomeProps) {
  const [movieShown, setMovieShown] = useState<MovieType>(movie);

  async function getNewMovie() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    setMovieShown(movies[randomNumber]);
  }

  return (
    <>
      <button
        onClick={getNewMovie}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8 h-12"
      >
        Buscar Novo Filme
      </button>

      <Container>
        <BrowserView>
          <Cover cover={movieShown.cover} title={movieShown.title} />
        </BrowserView>

        <section className="flex flex-col justify-center items-center border-separate">
          <Title title={movieShown.title} originalTitle={movieShown.originalTitle} />
          <Duration duration={movieShown.duration} />
          <Platform
            platforms={movieShown.platforms}
          />
        </section>

      </Container>

    </>
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
    cover: randomMovie.cover.external.url,
    platforms: randomMovie.properties['Watch in'].multi_select,
    duration: randomMovie.properties.Duração.rich_text[0].plain_text,
    originalTitle: randomMovie.properties.i18n.rich_text[0].plain_text,
  };

  const movies = allMovies.map((movieData) => ({
    title: movieData.properties.Name.title[0].plain_text,
    cover: movieData.cover.external.url,
    platforms: movieData.properties['Watch in'].multi_select,
    duration: movieData.properties.Duração.rich_text[0].plain_text,
    originalTitle: movieData.properties.i18n.rich_text[0].plain_text,
  }));

  return {
    props: {
      movie,
      movies,
    },
  };
};
