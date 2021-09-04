import { GetServerSideProps } from 'next';

import notion from '../services/notion';

import { IHomeProps } from '../@interfaces/pages/Home/IHomeProps';

export default function Home({ movies }: IHomeProps) {
  function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function RenderMovie() {
    const number = randomNumber();
    return (
      <>
        <h1>{movies[number].properties.Name.title[0].plain_text}</h1>
        <p>{movies[number].properties.Duração.rich_text[0].plain_text}</p>
        <p>
          {movies[number].properties.Prime.checkbox ? 'Prime' : ''}
          {movies[number].properties.Netflix.checkbox ? 'Netflix' : ''}
          {movies[number].properties['HBO Max'].checkbox ? 'HBO Max' : ''}
          {movies[number].properties['AppleTV+'].checkbox ? 'AppleTV+' : ''}
          {movies[number].properties['Paramount+'].checkbox ? 'Paramount+' : ''}
          {movies[number].properties['Disney+'].checkbox ? 'Disney+' : ''}
        </p>
      </>
    );
  }

  return (
    <main>
      <RenderMovie />
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
