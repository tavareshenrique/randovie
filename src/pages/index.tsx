import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';

import notion from '../services/notion';

import Container from '../components/Container';
import Title from '../components/Title';
import Duration from '../components/Duration';
import Platform from '../components/Platform';

import { IHomeProps } from '../@interfaces/pages/Home/IHomeProps';

export default function Home({ movies }: IHomeProps) {
  const [movieIndex, setMovieIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleMovie() {
    setMovieIndex(randomNumber());
  }

  useEffect(() => {
    if (movieIndex === -1) {
      setMovieIndex(randomNumber());
      setLoading(false);
    }
  }, [movieIndex]);

  function RenderMovie() {
    return (
      <Container>
        <Title movies={movies} movieIndex={movieIndex} />
        <Duration movies={movies} movieIndex={movieIndex} />
        <Platform
          movies={movies}
          movieIndex={movieIndex}
          handleMovie={() => handleMovie()}
        />
      </Container>
    );
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <RenderMovie />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return {
    props: {
      movies: response.results,
    },
  };
};
