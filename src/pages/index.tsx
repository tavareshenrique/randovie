import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import Image from 'next/image';

import notion from '../services/notion';

import netflixImg from '../../public/netflix.png';
import disneyImg from '../../public/disney.png';
import hboImg from '../../public/hbomax.png';
import paramountImg from '../../public/paramount.jpeg';
import primeImg from '../../public/prime.png';
import appleImg from '../../public/appletv.jpg';

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

  function noPlatform() {
    const hasPlatform = movies[movieIndex].properties.Netflix.checkbox
    || movies[movieIndex].properties.Prime.checkbox
    || movies[movieIndex].properties['AppleTV+'].checkbox
    || movies[movieIndex].properties['Disney+'].checkbox
    || movies[movieIndex].properties['HBO Max'].checkbox
    || movies[movieIndex].properties['Paramount+'].checkbox;

    return !hasPlatform;
  }

  function RenderMovie() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white">
          {movies[movieIndex].properties.Name.title[0].plain_text}
        </h1>

        <div className="flex flex-row justify-center items-center mt-4">
          <p className="text-white text-lg">Duração</p>
          <p className="text-white ml-2 text-lg">
            {movies[movieIndex].properties.Duração.rich_text[0].plain_text}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl text-white text-center">Plataforma(s):</h2>
          <div className="mt-2">
            <ul className="flex flex-row justify-center items-center">
              {movies[movieIndex].properties.Netflix.checkbox && (
                <li className="m-2 flex flex-col justify-center items-center">
                  <Image
                    src={netflixImg}
                    alt="Netflix"
                    height="104"
                    width="104"
                    className="rounded-2xl"
                  />
                  <span className="text-white">Netflix</span>
                </li>
              )}

              {movies[movieIndex].properties.Prime.checkbox && (
                <li className="m-2 flex flex-col justify-center items-center">
                  <Image
                    src={primeImg}
                    alt="Prime Video"
                    height="104"
                    width="104"
                    className="rounded-2xl"
                  />
                  <span className="text-white">Prime Video</span>
                </li>
              )}

              {movies[movieIndex].properties['Disney+'].checkbox && (
                <li className="m-2 flex flex-col justify-center items-center">
                  <Image
                    src={disneyImg}
                    alt="Disney+"
                    height="104"
                    width="104"
                    className="rounded-2xl"
                  />
                  <span className="text-white">Disney+</span>
                </li>
              )}

              {movies[movieIndex].properties['HBO Max'].checkbox && (
                <li className="m-2 flex flex-col justify-center items-center">
                  <Image
                    src={hboImg}
                    alt="HBO Max"
                    height="104"
                    width="104"
                    className="rounded-2xl"
                  />
                  <span className="text-white">HBO Max</span>
                </li>
              )}

              {movies[movieIndex].properties['Paramount+'].checkbox && (
                <li className="m-2 flex flex-col justify-center items-center">
                  <Image
                    src={paramountImg}
                    alt="Paramount+"
                    height="96"
                    width="96"
                    className="rounded-2xl"
                  />
                  <span className="text-white mt-2">Paramount+</span>
                </li>
              )}

              {movies[movieIndex].properties['AppleTV+'].checkbox && (
                <li className="m-2 mt-4 flex flex-col justify-center items-center">
                  <Image
                    src={appleImg}
                    alt="Apple TV+"
                    height="96"
                    width="96"
                    className="rounded-2xl"
                  />
                  <span className="text-white">Apple TV+</span>
                </li>
              )}

              {noPlatform() && (
                <li className="m-2 mt-4 flex flex-col justify-center items-center">
                  <span className="text-white">Não disponível</span>
                </li>
              )}
            </ul>
            <button
              onClick={handleMovie}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Buscar Novo Filme
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-800 h-screen w-screen flex flex-col justify-center items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <RenderMovie />
      )}
    </main>
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
